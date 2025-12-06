# Security Report

## Overview

The application implements multiple security layers to protect against common vulnerabilities, validate input, and control access. Security measures are applied at different levels: middleware, validation, and HTTP headers.

## Input Validation with Joi

**Implementation**: Joi schema validation middleware validates all incoming requests before processing.

**How it works**: 
- Validation schemas are defined for each endpoint (user registration, login, product creation, query parameters)
- Middleware intercepts requests and validates against schemas
- Invalid requests return 400 status with detailed error messages
- Supports validation on both request body and query parameters

**Validation Rules**:
- **User Registration**: Name (2-50 chars), valid email format, password (6-100 chars)
- **User Login**: Valid email format, password required
- **Product Creation**: Name/brand/category (2-100 chars), positive cost, optional tags array
- **Query Parameters**: Validates search strings, numeric price ranges, sort format, tag strings

**Benefits**: Prevents invalid data from reaching business logic, reduces database errors, improves API reliability.

## Rate Limiting

**Implementation**: Express Rate Limit middleware applied globally to all routes.

**Configuration**:
- **Window**: 1 minute (60,000ms)
- **Max Requests**: 5 requests per window per IP
- **Response**: Returns 429 status with "Too many requests" message when limit exceeded

**How it works**: Tracks request count per IP address within the time window. When limit is exceeded, subsequent requests are blocked until the window resets.

**Protection**: Prevents brute force attacks, DDoS attempts, and API abuse by limiting request frequency.

## CORS (Cross-Origin Resource Sharing)

**Implementation**: CORS middleware configured with specific origin and method restrictions.

**Configuration**:
- **Allowed Origins**: `http://localhost:3001` (whitelist approach)
- **Allowed Methods**: GET, POST, PUT, DELETE, PATCH
- **Default Behavior**: Blocks requests from other origins

**How it works**: Validates the `Origin` header of incoming requests. Only requests from whitelisted origins are allowed. Pre-flight OPTIONS requests are handled automatically.

**Protection**: Prevents unauthorized cross-origin requests, protects against CSRF attacks, restricts API access to trusted domains.

## Helmet Security Headers

**Implementation**: Helmet middleware applied globally to set secure HTTP headers.

**Security Headers Set**:
- **X-DNS-Prefetch-Control**: Prevents DNS prefetching
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-XSS-Protection**: Enables browser XSS filtering
- **Strict-Transport-Security**: Enforces HTTPS (when configured)
- **Content-Security-Policy**: Restricts resource loading (default settings)

**How it works**: Automatically adds security headers to all HTTP responses, providing defense-in-depth against common web vulnerabilities.

**Protection**: Mitigates XSS attacks, clickjacking, MIME sniffing, and other client-side security issues.

## Payload Size Limit

**Implementation**: Express JSON body parser configured with size restriction.

**Configuration**:
- **JSON Payload Limit**: 1MB maximum
- **URL Encoded**: Extended parsing enabled (no explicit limit)

**How it works**: Express middleware rejects request bodies exceeding 1MB before processing. Requests with oversized payloads return 413 (Payload Too Large) status.

**Protection**: Prevents memory exhaustion attacks, DoS through large payloads, and resource consumption abuse.

## Security Layer Order

Security measures are applied in this order:
1. **Helmet** - Sets security headers on all responses
2. **CORS** - Validates origin before processing
3. **Rate Limiting** - Limits request frequency
4. **Payload Size Check** - Rejects oversized requests
5. **Input Validation** - Validates data structure and content

This layered approach ensures multiple security checks before requests reach application logic.

## Best Practices Implemented

- **Defense in Depth**: Multiple security layers working together
- **Fail Secure**: Invalid requests are rejected early
- **Whitelist Approach**: CORS uses specific allowed origins
- **Input Sanitization**: Joi validation ensures data integrity
- **Resource Protection**: Rate limiting and payload limits prevent abuse
- **Security Headers**: Helmet provides additional browser-level protection

