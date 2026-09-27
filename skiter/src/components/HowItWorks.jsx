export default function HowItWorks({ steps }) {
  return (
    <section className="how" aria-labelledby="como-pedir">
      <div className="wrap">
        <h2 id="como-pedir">Cómo pedir</h2>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="step-n">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
