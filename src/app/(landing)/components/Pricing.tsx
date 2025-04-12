import { TRIAL_DAYS } from "@/app/utils/app-settings";

import { Button } from "@/app/components/Button";

export function Pricing() {
  return (
    <section className="flex flex-col gap-16 px-4">
      <div className="flex flex-col gap-6 mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-4xl text-white">
          An affordable value for everyone
        </h2>

        <p className="text-xl">
          Join the community of creators and professionals who are already
          elevating their online presence. Try it free for{" "}
          <span className="font-bold text-accent-pink">{TRIAL_DAYS} days</span>,
          no commitment required!
        </p>
      </div>

      <ul className="flex items-end justify-center gap-10">
        <li className="max-w-80 w-full">
          <div className="flex flex-col items-start gap-7 border border-border-primary rounded-2xl p-8">
            <div>
              <h3 className="text-white font-bold text-2xl">Monthly</h3>
              <span>Only</span>
            </div>

            <div className="flex items-center gap-2">
              <strong className="font-bold text-5xl">R$9.99</strong>
              <span className="text-2xl text-content-headline">/month</span>
            </div>

            <Button variant="secondary">Subscribe</Button>
          </div>
        </li>

        <li className="max-w-80 w-full">
          <span className="block text-center bg-gradient-to-r from-accent-purple to-accent-pink rounded-t-2xl uppercase text-xs text-white font-bold py-2">
            Recommended
          </span>

          <div className="flex flex-col items-start gap-7 p-0.5 rounded-b-2xl bg-gradient-to-r from-accent-purple to-accent-pink">
            <div className="flex flex-col items-start gap-7 p-8 rounded-b-2xl bg-background-primary w-full">
              <div>
                <h3 className="text-white font-bold text-2xl">Annual</h3>
                <span>Save with</span>
              </div>

              <div className="flex items-center gap-2">
                <strong className="font-bold text-5xl">R$99</strong>
                <span className="text-2xl text-content-headline">/year</span>
              </div>

              <Button>Subscribe</Button>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
