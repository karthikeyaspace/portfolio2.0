import React from "react";
import { Helmet } from "react-helmet";

const SEO: React.FC = () => {
  return (
    <Helmet>
      <title>Karthikeya Veruturi | Portfolio</title>
      <link rel="icon" type="image/png" href="profile.png" />
      <meta
        name="description"
        content="Explore Karthikeya Veruturi's portfolio showcasing projects, skills, and achievements in web development and beyond."
      />
      <meta
        name="keywords"
        content="Karthikeya Veruturi, Karthikeya, personal portfolio, portfolio, web development, JavaScript, TypeScript, React, software engineer, Golang, Node.js, programmer, developer"
      />
      <meta name="author" content="Karthikeya Veruturi" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Karthikeya Veruturi | Portfolio" />
      <meta
        property="og:description"
        content="Discover the portfolio of Karthikeya Veruturi, showcasing expertise in web development and software engineering."
      />
      <meta property="og:image" content="https://itskv.me/seo.png" />
      <meta property="og:url" content="https://itskv.me" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Karthikeya Veruturi | Portfolio" />
      <meta
        name="twitter:description"
        content="Discover the portfolio of Karthikeya Veruturi, showcasing expertise in web development and software engineering."
      />
      <meta name="twitter:image" content="https://itskv.me/seo.png" />
      <link rel="canonical" href="https://itskv.me" />
    </Helmet>
  );
};

export const ProjectsSEO: React.FC = () => {
  return (
    <Helmet>
      <title>Projects | Karthikeya Veruturi</title>

      <meta property="og:image" content="https://itskv.me/seo.png" />
      <meta property="og:url" content="https://itskv.me/projects" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Projects | Karthikeya Veruturi" />
      <meta
        name="twitter:description"
        content="Explore Karthikeya Veruturi's projects in web development, software engineering, and more."
      />
      <meta name="twitter:image" content="https://itskv.me/seo.png" />
      <link rel="canonical" href="https://itskv.me/projects" />
    </Helmet>
  );
};

export const ResumeSEO: React.FC = () => {
  return (
    <Helmet>
      <title>Resume | Karthikeya Veruturi</title>

      <meta property="og:image" content="https://itskv.me/seo.png" />
      <meta property="og:url" content="https://itskv.me/resume" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Resume | Karthikeya Veruturi" />
      <meta
        name="twitter:description"
        content="View Karthikeya Veruturi's resume, detailing his experience, skills, and achievements."
      />
      <meta name="twitter:image" content="https://itskv.me/seo.png" />
      <link rel="canonical" href="https://itskv.me/resume" />
    </Helmet>
  );
};

export default SEO;
