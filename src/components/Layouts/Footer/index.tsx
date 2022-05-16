import Container from '@/components/Layouts/Container'
import { CMS_NAME, EXAMPLE_PATH } from '@/common/lib/constants'

const Footer = () => {
  return (
    <footer className= "border-t-1 border-f4f4f5" >
    <Container>
    <div className="py-28 flex flex-col lg:flex-row items-center" >
      <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2" >
        Statically Generated with Next.js.
          < /h3>
        < div className = "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2" >
          <a
              href="https://nextjs.org/docs/basic-features/pages"
  className = "button"
    >
    Read Documentation
      < /a>
      < a
  href = {`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`
}
className = "mx-3 font-bold hover:underline"
  >
  View on GitHub
    < /a>
    < /div>
    < /div>
    < p className = 'text-center mb-4' >
      <small>copyrights { CMS_NAME } all rights reserved.< /small>
        < /p>
        < /Container>
        < /footer>
  )
}

export default Footer