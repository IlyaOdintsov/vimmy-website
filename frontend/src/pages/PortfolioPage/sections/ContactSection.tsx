import { BaseContainer } from '@/shared/ui/BaseContainer.tsx';
import { ContactForm } from '@/pages/PortfolioPage/ui/ContactForm.tsx';
import { ContactLinks } from '@/pages/PortfolioPage/ui/ContactLinks.tsx';

const ContactSection = () => {
	return (
		<section id="contact">
			<BaseContainer>
				<div className="text-center p-6 lg:p-0">
					<h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 lg:mt-6">Get In Touch</h2>
					<p className=" mt-2 sm:mt-4">Looking for a frontend developer? Let's discuss your project and see how I can help bring your ideas to life.</p>
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mt-10 sm:mt-12">
						<ContactLinks />
						<ContactForm />
					</div>
				</div>
			</BaseContainer>
		</section>
	);
};

export default ContactSection;
