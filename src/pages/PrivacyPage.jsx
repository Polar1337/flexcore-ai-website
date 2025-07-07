import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Datenschutzerklärung
          </h1>
          <p className="text-xl text-gray-600">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung 
            informiert Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen 
            Daten auf unserer Website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            <strong>flexcore.ai</strong><br />
            Unter den Linden 1<br />
            10117 Berlin<br />
            Deutschland<br />
            E-Mail: hello@flexcore.ai<br />
            Telefon: +49 (0) 30 123 456 789
          </p>

          <h2>2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung</h2>
          
          <h3>a) Beim Besuch der Website</h3>
          <p>
            Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser 
            automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden 
            temporär in einem sog. Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun 
            erfasst und bis zur automatisierten Löschung gespeichert:
          </p>
          <ul>
            <li>IP-Adresse des anfragenden Rechners</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
          </ul>

          <h3>b) Bei Nutzung unseres Kontaktformulars</h3>
          <p>
            Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website 
            bereitgestelltes Formular Kontakt aufzunehmen. Dabei sind folgende Angaben erforderlich:
          </p>
          <ul>
            <li>Vor- und Nachname</li>
            <li>E-Mail-Adresse</li>
            <li>Unternehmen</li>
            <li>Nachricht</li>
          </ul>
          <p>
            Optional können Sie auch Ihre Telefonnummer angeben. Die von Ihnen eingegebenen Daten werden 
            zum Zweck der individuellen Kommunikation mit Ihnen gespeichert.
          </p>

          <h2>3. Weitergabe von Daten</h2>
          <p>
            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten 
            Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
          </p>
          <ul>
            <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
            <li>die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
            <li>die Weitergabe zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser 
            automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, 
            wenn Sie unsere Seite besuchen.
          </p>
          <p>
            Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende 
            Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese 
            löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>

          <h2>5. Betroffenenrechte</h2>
          <p>Sie haben das Recht:</p>
          <ul>
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten</li>
            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
          </ul>

          <h2>6. Recht auf Beschwerde bei einer Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, 
            dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
          </p>

          <h2>7. SSL-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte 
            eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
            des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h2>8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025. Durch die Weiterentwicklung 
            unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher 
            Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Stand:</strong> Januar 2025<br />
              Bei Fragen zum Datenschutz kontaktieren Sie uns unter: hello@flexcore.ai
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;

