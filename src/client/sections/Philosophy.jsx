export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <div>
        <p className="eyebrow">The approach</p>
        <p className="philosophy-statement">
          I get hired to build things first — <span className="text-accent">software, embedded, AI, BI</span> — and
          I've found the more useful habit is treating security as{' '}
          <span className="text-underline">part of the build</span>, not a step tacked on after.
        </p>
        <p className="philosophy-body">
          Seven years designing and shipping IT solutions — full‑stack platforms, embedded systems, applied AI, and BI
          pipelines. Security isn't a separate service bolted on at the end; it's part of how the thing gets built in the
          first place.
        </p>
        <p className="philosophy-body">
          In practice that's meant architecting a two‑model AI system one quarter, migrating a legacy desktop app to
          Electron the next, and designing a Security Operations Center the one after that. Whatever gets built, gets
          built to hold up — hardened, documented, and handed over clean.
        </p>
      </div>
    </section>
  );
}
