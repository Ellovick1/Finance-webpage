import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";


const Layout = ({ children }) => {
  return (
    <>
      <section className='flex flex-col justify-between h-[95vh]'>
        <Navbar />
        <div className="">
        <div className="">{children}</div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;