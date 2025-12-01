class EmailService {
  static async sendEmail(to, subject, msg) {
    console.log(`Mock email sent to ${to}: ${subject} - ${msg}`);
    return true;
  }
}
export default EmailService;
