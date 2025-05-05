import React from 'react';

const Terms: React.FC = () => {
  const sections = [
    { id: 1, title: 'Introduction' },
    { id: 2, title: 'Acceptance of Terms' },
    { id: 3, title: 'Eligibility' },
    { id: 4, title: 'Account Registration' },
    { id: 5, title: 'User Content' },
    { id: 6, title: 'Purchases and Payment' },
    { id: 7, title: 'Shipping and Delivery' },
    { id: 8, title: 'Returns and Refunds' },
    { id: 9, title: 'Intellectual Property' },
    { id: 10, title: 'Disclaimers' },
    { id: 11, title: 'Limitation of Liability' },
    { id: 12, title: 'Indemnification' },
    { id: 13, title: 'Termination' },
    { id: 14, title: 'Modifications to Terms' },
    { id: 15, title: 'Governing Law' },
    { id: 16, title: 'Contact Information' }
  ];

  return (
    <div className="min-h-screen bg-white">
    
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-serif text-center mb-12">Terms Of Service</h1>
        
        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-lg font-medium mb-4">Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#section-${section.id}`}
                className="text-gray-600 hover:text-amber-600 transition-colors"
              >
                {section.id}. {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Terms Content */}
        <div className="space-y-12">
          <section id="section-1">
            <h2 className="text-2xl font-serif mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Gussy ("we," "our" or "us"). Gussy provides a platform for users to discover and purchase fashion items worn by celebrities and featured on popular shows.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              These Terms of Service ("Terms") govern your access to and use of our website, mobile applications, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Please read these Terms carefully before using our Services. If you do not agree to these Terms, you may not access or use our Services.
            </p>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-serif mb-4">2. Acceptance Of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using our Services on behalf of a company, organization, or other entity, you represent and warrant that you have the authority to bind that entity to these Terms, in which case "you" refers to that entity.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We may update these Terms from time to time. If we make material changes, we will notify you through our Services or by other means. Your continued use of our Services after such notice indicates your acceptance of the updated Terms.
            </p>
          </section>

          <section id="section-3">
            <h2 className="text-2xl font-serif mb-4">3. Eligibility</h2>
            <p className="text-gray-600 leading-relaxed">
            To use our Services, you must be at least 18 years old or the age of majority in your jurisdiction, whichever is greater. By using our Services, you represent and warrant that you meet these eligibility requirements.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            If you are accessing or using our Services on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms.
            </p>
          </section>

          <section id="section-4">
            <h2 className="text-2xl font-serif mb-4">4. Account Registration</h2>
            <p className="text-gray-600 leading-relaxed">
            To access certain features of our Services, you may need to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
            We reserve the right to suspend or terminate your account if any information you provide is inaccurate, misleading, or incomplete, or if you violate these Terms.
            </p>
          </section>

          <section id="section-5">
    <h2 className="text-2xl font-serif mb-4">5. User Content</h2>
    <p className="text-gray-600 leading-relaxed">
      Our Services may allow you to post, upload, or submit content, including but not limited to reviews, comments, and photos ("User Content"). You retain all rights in and are solely responsible for your User Content.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      By posting User Content, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, and transferable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display your User Content in connection with our Services.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      You represent and warrant that:
    </p>
    <ul className="list-disc pl-6 mt-2 space-y-2">
      <li className="text-gray-600">You own or have the necessary rights to your User Content;</li>
      <li className="text-gray-600">Your User Content does not violate the rights of any third party, including intellectual property rights and privacy rights;</li>
      <li className="text-gray-600">Your User Content complies with these Terms and all applicable laws and regulations.</li>
    </ul>
    <p className="text-gray-600 leading-relaxed mt-4">
      We reserve the right to remove any User Content that violates these Terms or that we find objectionable for any reason, without prior notice to you.
    </p>
  </section>

  <section id="section-6">
    <h2 className="text-2xl font-serif mb-4">6. Purchases And Payment</h2>
    <p className="text-gray-600 leading-relaxed">
      When you make a purchase through our Services, you agree to provide accurate and complete payment information. You authorize us to charge the designated payment method for the full amount of your purchase, including any applicable taxes and fees.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      All prices are listed in the currency specified on our Services and do not include taxes, shipping costs, or other fees unless otherwise stated. We reserve the right to change prices at any time without notice.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      We use third-party payment processors to facilitate transactions. By making a purchase, you agree to the terms and privacy policies of these payment processors.
    </p>
  </section>

  <section id="section-7">
    <h2 className="text-2xl font-serif mb-4">7. Shipping And Delivery</h2>
    <p className="text-gray-600 leading-relaxed">
      We ship to the locations specified on our Services. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by factors beyond our control.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      You are responsible for providing accurate shipping information. We are not liable for deliveries to incorrect addresses provided by you.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
    </p>
  </section>

  <section id="section-8">
    <h2 className="text-2xl font-serif mb-4">8. Returns And Refunds</h2>
    <p className="text-gray-600 leading-relaxed">
      Our return and refund policy is available on our website. By making a purchase, you agree to the terms of this policy.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      To be eligible for a return, items must be in their original condition and packaging. Certain items may be excluded from return eligibility, as specified on our Services.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      We reserve the right to refuse returns or refunds if the items do not meet our return requirements.
    </p>
  </section>

  <section id="section-9">
    <h2 className="text-2xl font-serif mb-4">9. Intellectual Property</h2>
    <p className="text-gray-600 leading-relaxed">
      Our Services and all content, features, and functionality available through our Services, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, and software, are owned by us, our licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      You may not use, reproduce, distribute, modify, or create derivative works of our Services or its content without our express written permission.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      All trademarks, service marks, logos, and trade names displayed on our Services are either our property or the property of third parties. You may not use these marks without our prior written consent or the consent of the third party that owns the mark.
    </p>
  </section>

  <section id="section-10">
    <h2 className="text-2xl font-serif mb-4">10. Disclaimers</h2>
    <p className="text-gray-600 leading-relaxed uppercase">
      OUR SERVICES ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      We do not warrant that our Services will be uninterrupted, error-free, or secure, or that any defects will be corrected. We make no representations about the accuracy, reliability, completeness, or timeliness of the content provided through our Services.
    </p>
    <p className="text-gray-600 leading-relaxed mt-4">
      We do not endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through our Services, and we will not be a party to or in any way monitor any transaction between you and third-party providers of products or services.
    </p>
  </section>

  <section id="section-11">
    <h2 className="text-2xl font-serif mb-4">11. Limitation Of Liability</h2>
    <p className="text-gray-600 leading-relaxed uppercase">
      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE, OUR DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
    </p>
    <ul className="list-disc pl-6 mt-4 space-y-2">
      <li className="text-gray-600">YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES;</li>
      <li className="text-gray-600">ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON OUR SERVICES;</li>
      <li className="text-gray-600">ANY CONTENT OBTAINED FROM OUR SERVICES; AND</li>
      <li className="text-gray-600">UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</li>
    </ul>
    <p className="text-gray-600 leading-relaxed mt-4 uppercase">
      WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
    </p>
  </section>

  {/* Continue from previous sections */}

<section id="section-12">
  <h2 className="text-2xl font-serif mb-4">12. Indemnification</h2>
  <p className="text-gray-600 leading-relaxed">
    You agree to indemnify, defend, and hold harmless us, our affiliates, officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from:
  </p>

</section>

<section id="section-13">
  <h2 className="text-2xl font-serif mb-4">13. Termination</h2>
  <p className="text-gray-600 leading-relaxed">
    We may terminate or suspend your account and access to our Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    Upon termination, your right to use our Services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including:
  </p>

</section>

<section id="section-14">
  <h2 className="text-2xl font-serif mb-4">14. Modifications To Terms</h2>
  <p className="text-gray-600 leading-relaxed">
    We reserve the right to modify or replace these Terms at any time at our sole discretion. The most current version will be posted on our website with the "Last Updated" date at the top.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    Your continued use of our Services after any changes to these Terms constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically for any changes.
  </p>
</section>

<section id="section-15">
  <h2 className="text-2xl font-serif mb-4">15. Governing Law</h2>
  <p className="text-gray-600 leading-relaxed">
    These Terms and your use of our Services shall be governed by and construed in accordance with the laws of the State of New York, without giving effect to any principles of conflicts of law.
  </p>
  <p className="text-gray-600 leading-relaxed mt-4">
    Any dispute arising from or relating to the subject matter of these Terms shall be resolved exclusively in the federal or state courts located in New York County, New York, and you hereby consent to the personal jurisdiction of such courts.
  </p>
</section>

<section id="section-16">
  <h2 className="text-2xl font-serif mb-4">16. Contact Information</h2>
  <p className="text-gray-600 leading-relaxed">
    If you have any questions about these Terms, please contact us at:
  </p>
  <div className="mt-4 space-y-1">
    <p className="text-gray-600">Gussy, Inc.</p>
    <p className="text-gray-600">123 Fashion Avenue</p>
    <p className="text-gray-600">New York, NY 10001</p>
    <p className="text-gray-600">Email: legal@gussy.com</p>
    <p className="text-gray-600">Phone: (212) 555-1234</p>
  </div>
</section>

          {/* Additional sections would follow the same pattern */}
        </div>
      </div>
    </div>
  );
};

export default Terms;