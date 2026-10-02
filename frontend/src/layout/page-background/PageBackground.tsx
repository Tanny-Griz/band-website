import './PageBackground.css'

export function PageBackground() {
  return (
    <div className="page-background" aria-hidden="true">
      <img
        className="page-background__image page-background__image--hero"
        src="/images/hero.png"
        alt=""
      />
      <img
        className="page-background__image page-background__image--release"
        src="/images/last_release_bg.png"
        alt=""
      />
      <img
        className="page-background__image page-background__image--footer"
        src="/images/footer.png"
        alt=""
      />
    </div>
  )
}
