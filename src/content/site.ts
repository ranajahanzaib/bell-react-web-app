export const site = {
  name: "Bell",
  description:
    "A website starter with personality, built for the projects you have in mind.",
  url: "https://example.com",
  repository: "https://github.com/ranajahanzaib/bell-react-web-app",
  announcement: "A familiar favorite, ready for what’s next.",
  navigation: [
    { label: "Features", href: "#features" },
    { label: "Customize", href: "#customize" },
    { label: "Guide", href: "#guide" },
  ],
  hero: {
    eyebrow: "The Bell website starter",
    title: "A theme with\npersonality.",
    description:
      "A flexible, responsive foundation for your next idea. Make it yours with a clear content config, thoughtful details, and the tools to take it live.",
    note: "A modern reimagining of the Bell theme",
    primaryAction: { label: "Explore the features", href: "#features" },
    secondaryAction: { label: "Get started", href: "#guide" },
    artwork: {
      alt: "A preview of a Bell website in a browser window",
      windowLabel: "Your next idea, on the web",
      title: "Make something\nthat feels like you.",
      button: "Make it yours",
    },
  },
  highlights: [
    { value: "Next.js", label: "App Router" },
    { value: "TypeScript", label: "Ready to edit" },
    { value: "MDX", label: "Publish articles" },
    { value: "Cloudflare", label: "Workers deploy" },
  ],
  features: {
    eyebrow: "A solid foundation",
    title: "The essentials,\nthoughtfully included.",
    note: "Start with a complete, responsive site. Shape the details around the project you want to build.",
    items: [
      { number: "01", icon: "✳", title: "A distinct design", text: "A confident visual system with expressive type, layered color and room for your own identity." },
      { number: "02", icon: "↗", title: "Responsive by default", text: "Layouts adapt from small screens to wide displays, with reduced-motion support built in." },
      { number: "03", icon: "◐", title: "Light and dark themes", text: "A thoughtful palette follows system preferences and remembers a visitor’s choice." },
      { number: "04", icon: "⌘", title: "One content config", text: "Update the brand, page copy, navigation and feature lists from a single typed file." },
      { number: "05", icon: "✎", title: "MDX ready", text: "Add rich, readable articles with the App Router and a working MDX example." },
      { number: "06", icon: "◎", title: "Search and sharing", text: "Metadata, Open Graph artwork, a sitemap and robots rules are already connected." },
    ],
  },
  about: {
    eyebrow: "Meet the new Bell",
    title: "Same welcoming spirit.\nA fresh foundation.",
    description:
      "Bell began as a website theme for people bringing new ideas to life. This rebuild keeps that purpose and brings it into the modern web: accessible components, practical defaults and a design that is easy to make your own.",
    points: ["Built with the Next.js App Router", "Styled with Tailwind CSS 4", "Prepared for static Cloudflare Workers"],
    cardTitle: "Your project\nstarts here.",
    cardLabel: "A flexible website starter",
  },
  customize: {
    eyebrow: "Make it yours",
    title: "Your voice,\nwithout the busywork.",
    description:
      "Change the name, messaging, links and feature list in one place. Adjust the visual language in the global stylesheet, then add pages as your project grows.",
    file: "src/content/site.ts",
  code: "export const site = {\n  name: \"Your project\",\n  description: \"A few words about it.\",\n};",
    link: { label: "Read the setup guide", href: "#guide" },
  },
  journal: {
    eyebrow: "A little more detail",
    title: "Writing is ready\nwhen you are.",
    excerpt:
      "The starter includes a working MDX article route. Add a page, write naturally, and keep your longer stories alongside the rest of your content.",
    link: { label: "Open the MDX example", href: "/journal/first-light/" },
    card: {
      ariaLabel: "Read the Bell MDX example",
      label: "A note from the docs",
      title: "Write with\nMDX.",
    },
  },
  guide: {
    eyebrow: "Start building",
    title: "A good place\nto begin.",
    description:
      "Install the dependencies, start the development server, then shape Bell around your project. When it is ready, build and preview the static Worker locally.",
    commands: ["pnpm install", "pnpm dev", "pnpm preview"],
    action: { label: "View the source on GitHub", href: "https://github.com/ranajahanzaib/bell-react-web-app" },
  },
  footer: {
    eyebrow: "Your next idea starts here",
    title: "Make room\nfor what’s next.",
    summary: "A website starter with personality.",
    repositoryLabel: "Explore the source",
  },
};

export type SiteContent = typeof site;
