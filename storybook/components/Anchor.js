export const Anchor = ({ href, toRef, ...rest }) => {
  const go = event => {
    event.preventDefault()
    window.scrollTo(0, toRef.current.offsetTop)
    toRef.current.focus()
  }

  return <a href={href} onClick={go} {...rest} />
}
