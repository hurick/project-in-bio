import { TRIAL_DAYS } from "@/app/utils/app-settings";

const faqItems = [
  {
    title: "How does portfolio and link creation work with Project in Bio",
    description:
      "With Project in Bio, you can create a professional portfolio and a link page in just a few minutes. Our platform offers customizable templates and an easy-to-use interface so you can showcase your work and organize your links efficiently.",
  },
  {
    title: "Is there a free trial period?",
    description: `Yes! We offer a ${TRIAL_DAYS}-day free trial, no commitment required. This allows you to explore all the features of our platform before deciding on a subscription.`,
  },
  {
    title: "Can I customize my portfolio design?",
    description:
      "Yes! With Project in Bio, you can customize colors, fonts, and your portfolio layout, ensuring it reflects your personal brand.",
  },
  {
    title: "Do I need technical skills to use the platform?",
    description:
      "No! Our platform was designed to be simple and intuitive, so no technical knowledge is required. You can create and customize your portfolio and links without complications.",
  },
  {
    title: "What happens if I cancel my subscription?",
    description:
      "You can cancel your subscription at any time. Your portfolio and link page will remain available until the end of the paid period, but after that, premium features will be deactivated.",
  },
  {
    title: "Can I share my portfolio on social media?",
    description:
      "Yes! You can easily share your portfolio and link page on your social media through a personalized link.",
  },
];

export function FAQ() {
  return (
    <div className="flex flex-col gap-16 mx-auto max-w-7xl">
      <h2 className="font-bold text-4xl text-white text-center">
        Frequently Asked Questions
      </h2>

      <div className="columns-2 gap-5 space-y-5">
        {faqItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 border border-border-primary rounded-2xl p-8"
          >
            <h3 className="text-white font-bold text-2xl">{item.title}</h3>
            <p className="text-content-body">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
