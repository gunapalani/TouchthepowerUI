let toggle = true;
function selectElementById(className) {
	return document.getElementById(`${className}`);
}
const sections = [
	selectElementById("homeBanner"),
	selectElementById("insights"),
	selectElementById("reward"),
	selectElementById("feature"),
	selectElementById("purpose"),
	selectElementById("testimonial"),
	selectElementById("faq"),
	selectElementById("blogs"),
];

const navItems = {
	homeBanner: selectElementById("home-nav"),
	insights: selectElementById("insights-nav"),
	reward: selectElementById("reward-nav"),
	feature: selectElementById("feature-nav"),
	purpose: selectElementById("purpose-nav"),
	testimonial: selectElementById("testimonial-nav"),
	faq: selectElementById("faq-nav"),
	blogs: selectElementById("blogs-nav"),
};

function observerCallback(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const navItem = navItems[entry.target.id];
			navItem.classList.add("active");
			Object.values(navItems).forEach((item) => {
				if (item !== navItem) {
					item.classList.remove("active");
				}
			});
		}
	});
}

const observer = new IntersectionObserver(observerCallback);
try {
	sections.forEach((sec) => {
		observer.observe(sec);
	});
} catch (e) {}
function toggleMobileMenu() {
	const mobileMenu = document.getElementById("hamburger");
	if (toggle) {
		mobileMenu.classList.add("flex");
		mobileMenu.classList.remove("hidden");
		toggle = false;
	} else {
		mobileMenu.classList.add("hidden");
		mobileMenu.classList.remove("flex");
		toggle = true;
	}
}
