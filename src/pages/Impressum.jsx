import "./Impressum.css";

export default function Impressum() {
  return (
    <div className="impressum-wrapper">
      <main className="impressum-page">
        <h1>Impressum</h1>

        <p>
          <strong>Evangelisch-Reformierte Baptistengemeinde Frankfurt e.V.</strong><br />
          c/o International Christian Fellowship of the Taunus K.d.ö.R.<br />
          Hohemarkstraße 75<br />
          61440 Oberursel
        </p>

        <p>
          <strong>Vertreten durch:</strong><br />
          Tobias Riemenschneider
        </p>

        <p>
          <strong>Vereinsregister:</strong> VR 15879<br />
          <strong>Registergericht:</strong> Amtsgericht Frankfurt am Main
        </p>

        <p>
          <strong>Umsatzsteuer-ID:</strong> DE414197489
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:kontakt@erb-frankfurt.de">
            kontakt@erb-frankfurt.de
          </a>
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
          verantwortlich.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die Inhalte dieser Website unterliegen dem deutschen Urheberrecht.
        </p>

        <h2>Datenschutz</h2>
        <p>
          Die Nutzung unserer Webseite ist grundsätzlich ohne Angabe
          personenbezogener Daten möglich.
        </p>
      </main>
    </div>
  );
}

