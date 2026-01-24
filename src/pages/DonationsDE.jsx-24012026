import React, { useState } from "react";
import "./Donations.css";

const Donations = () => {
  const [amount, setAmount] = useState(50);

  const stripeLink =
    "https://donate.stripe.com/test_8x200k2ui7Ql6y2fuyes000";

  const presetAmounts = [25, 50, 100, 200];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;

    window.location.href = stripeLink;
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

  return (
    <div className="donations-page">
      <div className="donations-inner">
        <main className="donations-main">
          <section className="donations-card">
            <h1>Unterstütze unseren Dienst</h1>
            <p className="donations-intro">
              Deine Spende hilft uns, das Evangelium zu verkündigen,
              Menschen zu erreichen und die Gemeinde zu stärken.
            </p>

            {/* LEFT BOX – STRIPE ONLY */}
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
                  placeholder="Eigener Betrag"
                />
              </div>

              <button type="submit" className="primary-btn">
                Jetzt spenden – €{amount}
              </button>

              <p className="secure-text">
                Sicher & verschlüsselt über Stripe.
              </p>
            </form>

            <div className="divider" />

            {/* RIGHT BOX – BANK DETAILS */}
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

export default Donations;

