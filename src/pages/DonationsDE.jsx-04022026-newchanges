import React, { useState } from "react";
import "./Donations.css";

const DonationsDE = () => {
  const [amount, setAmount] = useState(50);
  const [recipient, setRecipient] = useState({
    name: "",
    street: "",
    zip: "",
    city: "",
    country: "Deutschland",
  });

  // 🔑 WEB3FORMS ACCESS KEY (REPLACE WITH YOUR REAL KEY)
  const WEB3FORMS_ACCESS_KEY = "f5768b05-b1b6-4142-add8-7bb2ed6fb528";

  const stripeLinks = {
    25: "https://donate.stripe.com/9B6dR99tkb27bHz9JO5kk00",
    50: "https://donate.stripe.com/9B67sLaxo4DJ3b3f485kk01",
    100: "https://donate.stripe.com/3cI5kD8pg7PVcLD1di5kk02",
    200: "https://donate.stripe.com/bJe00jaxo5HN12Ve045kk03",
  };

  const presetAmounts = [25, 50, 100, 200];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recipient.name || !recipient.street || !recipient.zip || !recipient.city) {
      alert("Bitte gib deine vollständige Adresse für die Spendenbescheinigung an.");
      return;
    }

    const link = stripeLinks[amount];
    if (!link) {
      alert("Für individuelle Beträge nutze bitte die Banküberweisung.");
      return;
    }

    // ✅ SEND DATA TO WEB3FORMS
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Neue Spende – Spendenbescheinigung",
          from_name: "Spendenformular Website",
          amount: `€${amount}`,
          name: recipient.name,
          street: recipient.street,
          zip: recipient.zip,
          city: recipient.city,
          country: recipient.country,
        }),
      });
    } catch (err) {
      // ❗ Even if email fails, donation can still proceed
      console.error("Web3Forms error:", err);
    }

    // ✅ REDIRECT TO STRIPE (UNCHANGED)
    window.location.href = link;
  };

  const copyBankDetails = () => {
    const text = [
      "Kontoinhaber: Reformierte Baptistengemeinde Frankfurt",
      "IBAN: DE03510500150997023445",
      "BIC: NASSDE55XXX",
      "Verwendungszweck: Spende",
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      alert("Bankdaten kopiert!");
    });
  };

  const handleRecipientChange = (e) => {
    setRecipient({ ...recipient, [e.target.name]: e.target.value });
  };

  return (
    <div className="donations-page">
      <div className="donations-inner">
        <main className="donations-main">
          <section className="donations-card">
            <h1>Unterstütze unseren Dienst</h1>

            <p className="donations-intro">
              Deine Spende hilft uns, der Gemeinde Jesu zu dienen.
              <br /><br />
              Für die Ausstellung einer Spendenbescheinigung benötigen wir deine Adresse.
            </p>

            {/* ================= LEFT: STRIPE ================= */}
            <form onSubmit={handleSubmit} className="donations-form">
              <label className="field-label">Betrag wählen</label>

              <div className="amount-row">
                {presetAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${amount === value ? "active" : ""}`}
                    onClick={() => setAmount(value)}
                  >
                    €{value}
                  </button>
                ))}
              </div>

              <div className="custom-amount">
                <span className="currency">€</span>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) =>
                    setAmount(Math.max(1, Number(e.target.value)))
                  }
                />
              </div>

              {/* ✅ RECIPIENT ADDRESS */}
              <label className="field-label">Adresse für Spendenbescheinigung</label>
              <input name="name" placeholder="Vollständiger Name" value={recipient.name} onChange={handleRecipientChange} />
              <input name="street" placeholder="Straße & Hausnummer" value={recipient.street} onChange={handleRecipientChange} />
              <input name="zip" placeholder="PLZ" value={recipient.zip} onChange={handleRecipientChange} />
              <input name="city" placeholder="Ort" value={recipient.city} onChange={handleRecipientChange} />
              <input name="country" placeholder="Land" value={recipient.country} onChange={handleRecipientChange} />

              <button type="submit" className="primary-btn">
                Jetzt spenden – €{amount}
              </button>

              <p className="secure-text">
                Sicher & verschlüsselt über Stripe.
              </p>
            </form>

            <div className="divider" />

            {/* ================= RIGHT: BANK (UNCHANGED) ================= */}
            <div className="other-ways">
              <h2>Banküberweisung</h2>

              <p className="small-text">
                Nutze folgende Bankdaten für eine direkte Spende:
              </p>

              <div className="bank-box">
                <div className="bank-row">
                  <span>Kontoinhaber</span>
                  <strong>Reformierte Baptistengemeinde Frankfurt</strong>
                </div>
                <div className="bank-row">
                  <span>IBAN</span>
                  <strong>DE03 5105 0015 0997 0234 45</strong>
                </div>
                <div className="bank-row">
                  <span>BIC</span>
                  <strong>NASSDE55XXX</strong>
                </div>
                <div className="bank-row">
                  <span>Verwendungszweck</span>
                  <strong>Spende</strong>
                </div>
              </div>

              <button className="secondary-btn" onClick={copyBankDetails}>
                Bankdaten kopieren
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default DonationsDE;

