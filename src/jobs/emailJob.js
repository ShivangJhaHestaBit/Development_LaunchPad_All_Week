import emailQueue from "./queues/email.queue.js";

export const addEmailJob = async (email, subject, message) => {
  await emailQueue.add(
    "send-email",
    { email, subject, message },
    {
      attempts: 5,
      backoff: {
        type: "exponential",
        delay: 3000
      },
      removeOnComplete: true,
      removeOnFail: false
    }
  );
};
