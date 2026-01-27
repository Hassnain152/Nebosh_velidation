import { useState } from "react";
import "./styles.css";
import { ProgressBar } from "./ProgressBar";
export default function App() {
  const [step, setStep] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: ""
  });

  const nextStep = () => setStep(step + 1);

  const handleSendEmail = () => {
    window.location.href =
      "mailto:nebooshcertiificate960@gmail.com?subject=Certificate Verification Request";
    nextStep();
  };

  return (
    <div className="container">
      <ProgressBar step={step} />

      {step === 1 && (
        <div className="card">
          <h2>IMPORTANT, PLEASE READ BEFORE CONTINUING</h2>
          <p>
            We take the security of personal data and certificates extremely
            seriously. As part of the verification process, we will email the
            learner that was originally issued this certificate to authenticate
            your request.
          </p>
          <p>
            To allow the learner to identify who is requesting information
            relating to them, your name and organisation will be provided to the
            learner to allow them to authorise your request.
          </p>
          <p>
            Your email address will be used by us to confirm the outcome of your
            request within 2 working days of submission.
          </p>
          <p>
            Please note: The outcome of this request will be recorded and held by
            us for monitoring purposes.
          </p>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            I confirm I am happy to store and use my details, as detailed above
            (tick box must be ticked to proceed)
          </label>

          <button disabled={!accepted} onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="card">
          <h2>Your Details</h2>

          <input
            className="input"
            placeholder="Your Name *"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="input"
            placeholder="Your Organisation *"
            value={form.organisation}
            onChange={(e) =>
              setForm({ ...form, organisation: e.target.value })
            }
          />
          <input
            className="input"
            placeholder="Your Email *"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            disabled={!form.name || !form.organisation || !form.email}
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="card">
          <h2>
            To verify a certificate parchment, please verify the following piece
            of information exactly as they are on document
          </h2>

          <button onClick={handleSendEmail}>Send Request</button>
        </div>
      )}

      {step === 4 && (
        <div className="card">
          <h2>
            Thank you for your request to verify our certificate. Your request
            has been sent to the learner that was issued this certificate for
            authentication.
          </h2>
          <p>
            Verification of this document is not complete until you have
            received formal verification by email, from us.
          </p>
          <p>
            An email will be sent to you within 2 working days confirming the
            outcome of your request.
          </p>
          <p>
            Full information of our verification process and additional guidance
            on how to verify certificates is available on our website.
          </p>
        </div>
      )}
    </div>
  );
}
