export function ProgressBar({ step }) {
  return (
    <div className="progress">
      {[1, 2, 3, 4].map((num, index) => (
        <div key={num} className="progress-item">
          <div className={`circle ${step >= num ? "active" : ""}`}>
            {num}
          </div>
          {index !== 3 && <div className={`line ${step > num ? "active" : ""}`} />}
        </div>
      ))}
    </div>
  );
}
