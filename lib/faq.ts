// Home page FAQ. The visible FAQ and the FAQPage structured data are both
// rendered from this list, so they can't drift apart.
import { TRIAL_DAYS } from "@/lib/trial"

export interface FaqItem {
  question: string
  answer: string
}

// No prices on the site: gyms ask support for pricing.
const priceAnswer =
  `Every gym starts with a ${TRIAL_DAYS}-day free trial. For pricing, email support@bjj-us.com with your number of active students. ` +
  "Members always download the app for free."

export const FAQ: FaqItem[] = [
  {
    question: "What is BJJ-US?",
    answer:
      "BJJ-US is an app for running a Brazilian jiu-jitsu gym. Members check in to class, see the schedule and track their belt and stripes. Professors confirm attendance and award promotions. Owners manage memberships, waivers and reports. Every gym sees the app with its own name, logo and colors.",
  },
  {
    question: "Who is BJJ-US best for?",
    answer:
      "Best for jiu-jitsu academies that want their own branded member app and attendance they can trust. It's built for BJJ only: adult and kids belt systems, stripes, promotions and family accounts work the way a jiu-jitsu gym runs.",
  },
  {
    question: "How much does BJJ-US cost?",
    answer: priceAnswer,
  },
  {
    question: "Does my gym get its own branded app?",
    answer:
      "Yes. Members download BJJ-US and join with your gym's invite code; from then on the app shows your gym's name, logo and colors. Change them anytime and every member sees the new look, with no app update and no extra fee.",
  },
  {
    question: "How does check-in and attendance work?",
    answer:
      'Every check-in is confirmed. With arrival check-in on, the member\'s phone tells the gym they made it (yes or no, the location never leaves the phone). Otherwise the app asks the member "Did you make it?", and after class the professor approves or removes whoever is left.',
  },
  {
    question: "How does BJJ-US track belts and promotions?",
    answer:
      "BJJ-US follows the adult and kids belt systems by age, with stripes. It counts each student's time at their belt and training days since their last promotion, and shows who meets your gym's promotion guidelines. The professor always decides.",
  },
  {
    question: "Can parents manage their kids' accounts?",
    answer:
      "Yes. A parent manages their children from one login: checking in, the schedule, belt progress and signing the waiver for them.",
  },
  {
    question: "Does BJJ-US handle waivers?",
    answer:
      "Yes. Start from our waiver template with your gym's legal name, address and state filled in. Members sign in the app, trial students sign online before their first class, and parents sign for kids. Every signature is kept with the exact version signed.",
  },
  {
    question: "Can I import my current members?",
    answer:
      "Yes. Upload your member list as a spreadsheet (CSV) on the BJJ-US admin website. BJJ-US creates an invite code for each member to join.",
  },
  {
    question: "Is there a website for gym owners and professors?",
    answer:
      "Yes. Owners and professors sign in at admin.bjj-us.com to manage members, the class schedule, attendance, reports, the lesson library, waivers and the gym's branding from a computer.",
  },
  {
    question: "How fast can my gym go live?",
    answer:
      "The same day. Send us your gym's name, logo, brand color and the owner's email. We create your gym, the owner adds the schedule and plans, and members join with their invite codes.",
  },
  {
    question: "Is my gym's data private?",
    answer:
      "Yes. Each gym's members, attendance and payments are kept separate from every other gym's, and members' locations never leave their phones.",
  },
  {
    question: "What languages does BJJ-US support?",
    answer:
      "The app is in English and Portuguese, and more languages are coming, including Spanish, Italian and French. Each member picks their language, and notifications follow their choice.",
  },
]
