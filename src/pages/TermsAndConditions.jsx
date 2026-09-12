import CompanyLayout from "../Components/CompanyLayout.jsx";

const LegalShell = ({ title, children }) => (
  <CompanyLayout>
    <div className="bg-blue-50 min-h-screen pb-16">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
          <div className="h-1 w-24 bg-red-500 mt-4 mb-6" />
          <p className="text-gray-600 mb-8">
            Effective Date: <span className="font-semibold text-gray-800">01/05/2025</span>
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  </CompanyLayout>
);

const Section = ({ title, children }) => (
  <section className="space-y-3 border-t border-gray-200 pt-6">
    {title ? <h2 className="text-xl font-semibold text-gray-900">{title}</h2> : null}
    {children}
  </section>
);

const Highlight = ({ label, children }) => (
  <p>
    <span className="font-semibold text-gray-900">{label}</span> {children}
  </p>
);

const TermsAndConditions = () => (
  <LegalShell title="Terms and conditions">
    <p>
      Welcome to Banquethall.co. These Terms & Conditions (“Terms”) govern your access to and use
      of our website and services. By using Banquethall.co, you agree to be bound by these Terms.
    </p>

    <Section title="1. Use of the Website">
      <p>
        Banquethall.co provides a platform to browse, book, and manage banquet hall reservations.
        Users may include venue owners and customers.
      </p>
      <Highlight label="Eligibility:">You must be at least 18 years old to use our services.</Highlight>
      <Highlight label="Account Responsibility:">
        You are responsible for maintaining the confidentiality of your account credentials and for
        all activities that occur under your account.
      </Highlight>
    </Section>

    <Section title="2. Services">
      <p>Banquethall.co allows:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Users to search and book banquet halls for events.</li>
        <li>Venue owners to list and manage their properties.</li>
      </ul>
      <p>We reserve the right to modify or discontinue any aspect of our services without notice.</p>
    </Section>

    <Section title="3. Booking and Payments">
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Highlight label="Payment Terms:">
            Payment for reservations must be made as per the terms outlined during booking.
          </Highlight>
        </li>
        <li>
          <Highlight label="Cancellations & Refunds:">
            Each venue sets its own cancellation policy. Please review the specific policy before
            confirming your booking.
          </Highlight>
        </li>
        <li>
          <Highlight label="Disputes:">
            We are not a party to any contract between users and venue owners, and are not liable
            for any dispute that arises from such agreements.
          </Highlight>
        </li>
      </ul>
    </Section>

    <Section title="4. User Conduct">
      <p>You agree not to:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Violate any applicable laws or regulations.</li>
        <li>Upload harmful, misleading, or illegal content.</li>
        <li>Interfere with the operation of the website or attempt unauthorized access.</li>
        <li>
          Banquethall.co declares that any material from this Website is not allowed to be copied or
          distributed, or republished, or transmitted in any way, without the prior written consent
          of Banquethall.co. Any unauthorized use or violation of these Terms of Use shall
          immediately and automatically terminate your right to access and use this Website and
          shall further subject you to legal liability. You warrant to Banquethall.co that you shall
          not use the Website for any purpose that is unlawful, unauthorized, or inconsistent with
          these terms, and you agree that your right to use Website will terminate immediately upon
          your violation of this warranty.
        </li>
        <li>
          Banquethall.co reserves the right, at its sole discretion, to block or terminate your
          access to the Website and remove non-compliant information/content at any time, with or
          without notice in the event you are in non-compliance with these Terms of Use or
          Banquethall.co&apos;s Privacy Policy. Banquethall.co will not host, store, or publish any
          unlawful information, which is prohibited under law in interest of the sovereignty and
          integrity of India, security of state, friendly relation with foreign states, public
          order, decency, or morality, or is in contempt of court, is defamatory or incites an
          offence regarding the above, or any other prohibited information and may remove or disable
          access to such information, voluntarily or upon receipt of a court order or on being
          notified by a Government agency. Such information may not be removed or access to it may
          not be disabled, if the information is temporary, transient, or intermediate storage of
          information is done in an automatic manner, which does not involve exercise of any human,
          automated or algorithmic editorial control by us. You hereby provide express consent and
          authorisation to Banquethall.co to retain the information that has been removed or
          disabled to meet the requirement of statutory authorities and to comply with the
          applicable laws.
        </li>
        <li>
          You agree, acknowledge, confirm and undertake that you shall not use the Website to host,
          display, upload, modify, publish, transmit, store, update or share any information/data
          that:
        </li>
        <li>(i) belongs to another person and to which the user does not have any right;</li>
        <li>
          (ii) is defamatory, obscene, pornographic, paedophilic, invasive of another&apos;s
          privacy, including bodily privacy, insulting or harassing on the basis of gender,
          libellous, racially or ethnically objectionable, relating or encouraging money laundering
          or gambling, or otherwise inconsistent with or contrary to applicable laws;
        </li>
        <li>(iii) is harmful to minors;</li>
        <li>(iv) infringes any patent, trademark, copyright or other proprietary rights;</li>
        <li>(v) violates any law for the time being in force;</li>
        <li>
          (vi) deceives or misleads the addressee about the origin of the message or knowingly and
          intentionally communicates any information which is patently false or misleading in nature
          but may reasonably be perceived as a fact;
        </li>
        <li>(vii) impersonates another person;</li>
        <li>
          (viii) threatens the unity, integrity, defence, security or Sovereignty of India, friendly
          relations with foreign States, or public order, or causes incitement to the commission of
          any cognizable offence or prevents investigation of any offence or is insulting any
          foreign States;
        </li>
        <li>
          (ix) contains software virus or any other computer code, file or program designed to
          interrupt, destroy or limit the functionality of any computer resource;
        </li>
        <li>
          (x) is patently false and untrue, and is written or published in any form, with the intent
          to mislead or harass a person, entity or agency for financial gain or to cause any injury
          to any person;
        </li>
        <li>
          (xi) is fraudulent or involves the use of counterfeit or stolen credit cards; and
        </li>
        <li>
          (xii) any attempt of using the account, username, or password of another user, as
          applicable, at any time or disclosing your password, as applicable, to any third party or
          permitting any third party to access your account; shall not create any liability for
          Banquethall.co.
        </li>
        <li>
          If you contravene these Terms of Use (including without limitation the foregoing) or
          Banquethall.co has reasonable grounds to suspect that you have contravened these Terms of
          Use (including without limitation the foregoing), Banquethall.co has the right to
          indefinitely deny or terminate your access or usage rights to the Website immediately
          and/or remove non-compliant information and to refuse to honour your request(s) to
          continue accessing or using the Website.
        </li>
        <li>
          Obscene Content: If you are exposed to or have concerns regarding the content on
          BANQUETHALL.CO Platform that: (a) is in the nature of any material which exposes the
          private area of an individual; (b) shows an individual in full or partial nudity; (c)
          shows or depicts an individual in any sexual act or conduct; or (d) is in the nature of
          impersonation (in an electronic form), such as artificially morphed images of an
          individual, then you (or any person on your behalf) may raise a grievance by reaching us
          banquethall.co@gmail.com
        </li>
        <li>
          Banquethall.co is entitled to have automated systems and tools in place to improve its
          ability to detect and remove obscene, abusive or any other prohibited content (partially
          or fully) that violates these Terms of Use or that harms other Users or integrity of
          Banquethall.co Services. You are prohibited from engaging in the following activities but
          are not limited to:
        </li>
        <li>
          a. systematically retrieve data or other content from the BANQUETHALL.CO Platform to
          create or compile, directly or indirectly, a collection, compilation, database, or
          directory without written permission from Banquethall.co;
        </li>
        <li>
          b. make any unauthorized use of the Website, including collecting user names and/or email
          addresses of users by electronic or other means for the purpose of sending unsolicited
          email, or creating user accounts by automated means or under false pretenses;
        </li>
        <li>
          c. circumvent, disable, or otherwise interfere with security-related features of the
          Website, including features that prevent or restrict the use or copying of any content or
          enforce limitations on the use of the Website and/or the content contained therein;
        </li>
        <li>d. engage in unauthorized framing of or linking to the Website;</li>
        <li>
          e. trick, defraud, or mislead us and other users, especially in any attempt to learn
          sensitive account information such as user passwords;
        </li>
        <li>f. make improper use of our support services or submit false reports of abuse or misconduct;</li>
        <li>
          g. engage in any automated use of the system, such as using scripts to send comments or
          messages, or using any data mining, robots, or similar data gathering and extraction
          tools;
        </li>
        <li>
          h. interfere with, disrupt, or create an undue burden on the Website or the networks or
          services connected to the Website;
        </li>
        <li>i. attempt to impersonate another user or person or use the username of another user;</li>
        <li>j. sell or otherwise transfer your profile;</li>
        <li>
          k. use any information obtained from the Webiste in order to harass, abuse, or harm
          another person;
        </li>
        <li>
          l. use the Website as part of any effort to compete with us or otherwise use the Website
          and/or its content for any revenue-generating endeavour or commercial enterprise;
        </li>
        <li>
          m. decipher, decompile, disassemble, or reverse engineer any of the software comprising or
          in any way making up a part of the Website;
        </li>
        <li>
          n. attempt to bypass any measures of the Webiste designed to prevent or restrict access to
          the Website, or any portion of the Website;
        </li>
        <li>
          o. copy or adapt the Website&apos;s software, including but not limited to Flash, PHP,
          HTML, JavaScript, or other code;
        </li>
        <li>
          p. upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or
          other material, including excessive use of capital letters and spamming (continuous
          posting of repetitive text), that interferes with any party&apos;s uninterrupted use and
          enjoyment of the Website or modifies, impairs, disrupts, alters, or interferes with the
          use, features, functions, operation, or maintenance of the Website;
        </li>
        <li>
          q. upload or transmit (or attempt to upload or to transmit) any material that acts as a
          passive or active information collection or transmission mechanism;
        </li>
        <li>
          r. except as may be the result of standard search engine or Internet browser usage, use,
          launch, develop, or distribute any automated system, including without limitation, any
          spider, robot, cheat utility, scraper, or offline reader that accesses the Website, or
          using or launching any unauthorized script or other software; and
        </li>
        <li>s. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Website.</li>
      </ul>
    </Section>

    <Section title="5. Intellectual Property">
      <p>
        All content on Banquethall.co, including text, images, logos, and software, is the property
        of Banquethall.co or its licensors and is protected by intellectual property laws. You may
        not use this content without prior written consent.
      </p>
    </Section>

    <Section title="6. Limitation of Liability">
      <p>Banquethall.co is not liable for:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Any indirect, incidental, or consequential damages.</li>
        <li>Errors or inaccuracies in venue listings.</li>
        <li>Acts or omissions of venue owners or users.</li>
      </ul>
      <p>Use of the site is at your own risk.</p>
    </Section>

    <Section title="7. Indemnification">
      <p>
        You agree to indemnify and hold harmless Banquethall.co, its affiliates, and employees from
        any claims, losses, or damages resulting from your use of the website or your violation of
        these Terms.
      </p>
    </Section>

    <Section title="8. Termination">
      <p>
        We may suspend or terminate your access to Banquethall.co at any time, without notice, if we
        believe you have violated these Terms.
      </p>
    </Section>

    <Section title="9. Changes to Terms">
      <p>
        We reserve the right to update these Terms at any time. Continued use of the website
        constitutes your acceptance of the new Terms.
      </p>
    </Section>

    <Section title="10. Governing Law">
      <p>
        These Terms shall be governed by and construed in accordance with the laws of [Insert
        Jurisdiction].
      </p>
    </Section>

    <Section title="11. Contact Us">
      <p>If you have any questions about these Terms, please contact us at:</p>
      <p>
        <a href="mailto:banquethall.co@gmail.com" className="text-red-600 hover:underline">
          banquethall.co@gmail.com
        </a>
      </p>
    </Section>
  </LegalShell>
);

export default TermsAndConditions;
