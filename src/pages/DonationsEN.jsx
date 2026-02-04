import React, { useState } from "react";
import "./Donations.css";

export default function DonationsEN() {
  const [amount, setAmount] = useState(50);
  const [recipient, setRecipient] = useState({
    name: "",
    street: "",
    zip: "",
    city: "",
    country: "Germany",
  });

  // 🔑 WEB3FORMS ACCESS KEY (REPLACE WITH YOUR REAL KEY)
  const WEB3FORMS_ACCESS_KEY = "f5768b05-b1b6-4142-add8-7bb2ed6fb528";

  // ✅ UPDATED STRIPE PAYMENT LINKS (TEST MODE)
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
      alert("Please provide your full address for the donation receipt.");
      return;
    }

    const link = stripeLinks[amount];

    if (!link) {
      alert("For custom amounts, please use bank transfer.");
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
          subject: "New Donation – Receipt Required",
          from_name: "Donation Form Website",
          amount: `€${amount}`,
          name: recipient.name,
          street: recipient.street,
          zip: recipient.zip,
          city: recipient.city,
          country: recipient.country,
        }),
      });
    } catch (err) {
      console.error("Web3Forms error:", err);
    }

    // ✅ REDIRECT TO STRIPE (UNCHANGED)
    window.location.href = link;
  };

  const copyBankDetails = () => {
    const text = [
      "Account holder: Reformed Baptist Church Frankfurt",
      "IBAN: DE03 5105 0015 0997 0234 45",
      "BIC: NASSDE55XXX",
      "Reference: Donation",
    ].join("\n");

    navigator.clipboard.writeText(text).then(() => {
      alert("Bank details copied!");
    });
  };

  const handleRecipientChange = (e) => {
    setRecipient({ ...recipient, [e.target.name]: e.target.value });
  };

  return (
    <div className="donations-page donations-page-en">
      <div className="donations-inner">
        <main className="donations-main">
          <section className="donations-card">
            <h1>Support Our Ministry</h1>

            <p className="donations-intro">
              Your donation helps us to serve the church of Jesus Christ,
              to proclaim the Gospel to the world, and to care for those in need.
              <br /><br />
              To issue a donation receipt, we kindly ask for your address.
            </p>

            {/* ================= LEFT: STRIPE ================= */}
            <form onSubmit={handleSubmit} className="donations-form">
              <label className="field-label">Select Amount</label>

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
                  placeholder="Custom amount"
                />
              </div>

              {/* ✅ RECIPIENT ADDRESS */}
              <label className="field-label">Address for Donation Receipt</label>
              <input name="name" placeholder="Full Name" value={recipient.name} onChange={handleRecipientChange} />
              <input name="street" placeholder="Street & House Number" value={recipient.street} onChange={handleRecipientChange} />
              <input name="zip" placeholder="ZIP Code" value={recipient.zip} onChange={handleRecipientChange} />
              <input name="city" placeholder="City" value={recipient.city} onChange={handleRecipientChange} />
              <input name="country" placeholder="Country" value={recipient.country} onChange={handleRecipientChange} />

              <button type="submit" className="primary-btn">
                Donate now – €{amount}
              </button>

              <p className="secure-text">
                Secure & encrypted via Stripe.
              </p>
            </form>

            <div className="divider" />

            {/* ================= RIGHT: BANK ================= */}
            <div className="other-ways">
              <h2>Bank Transfer</h2>

              <p className="small-text">
                You can also donate directly using the following bank details:
              </p>

              <div className="bank-box">
                <div className="bank-row">
                  <span>Account holder</span>
                  <strong>Reformed Baptist Church Frankfurt</strong>
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
                  <span>Reference</span>
                  <strong>Donation</strong>
                </div>
              </div>

              <button className="secondary-btn" onClick={copyBankDetails}>
                Copy bank details
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

