import { Worker } from "bullmq";
import EmailService from "../../services/email.service.js";

const emailWorker = new Worker(
  "email-queue",
  async (job) => {
    console.log("Processing email job:", job.id);

    const { email, subject, message } = job.data;
    await EmailService.sendEmail(email, subject, message);
    
    console.log("Email sent:", email);
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379
    }
  }
);

// Log worker events
emailWorker.on("completed", (job) => {
  console.log(`Job ${job.id} completed`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed:`, err);
});

export default emailWorker;
