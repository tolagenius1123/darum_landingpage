import Navbar from "../../components/reusables/Navbar";
import HeroSection from "./HeroSection";
import SellingPoint from "./SellingPoint";
import Manual from "./Manual";
import Coverage from "./Coverage";
import Business from "./Business";
import CallToAction from "./CallToAction";
import Footer from "../../components/reusables/Footer";
import FAQs from "./FAQs";

const LandingPage = () => {
	return (
		<div className="w-full h-auto bg-white">
			<Navbar />
			<HeroSection />
			<SellingPoint />
			<Manual />
			<Coverage />
			<Business />
			<CallToAction />
			<FAQs />
			<Footer />
		</div>
	);
};

export default LandingPage;
