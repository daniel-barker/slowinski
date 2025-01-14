// src/routes/blog/[slug]/+page.js

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// Example blog posts
	const posts = {
		'understanding-medicare-enrollment': {
			title: 'Understanding Medicare Enrollment Periods',
			date: '2025-01-10',
			readTime: '5 min read',
			category: 'Medicare Basics',
			image: '/images/medicare-enrollment.webp',
			author: {
				name: 'Ed Slowinski',
				title: 'Certified Healthcare Advisor',
				image: '/images/ed.webp'
			},
			content: `
        <h2>When Can You Enroll in Medicare?</h2>
        <p>Understanding Medicare enrollment periods is crucial for ensuring you get the coverage you need when you need it. Here are the key enrollment periods you should know about:</p>

        <h3>Initial Enrollment Period (IEP)</h3>
        <p>Your Initial Enrollment Period is a seven-month window that includes:</p>
        <ul>
          <li>The three months before your 65th birthday month</li>
          <li>Your birthday month</li>
          <li>The three months after your birthday month</li>
        </ul>

        <h3>Special Enrollment Period (SEP)</h3>
        <p>You may qualify for a Special Enrollment Period if you experience certain life events, such as:</p>
        <ul>
          <li>Retiring and losing your employer coverage</li>
          <li>Moving to a new area</li>
          <li>Losing your current coverage</li>
        </ul>

        <h2>Tips for Enrollment</h2>
        <p>Here are some important tips to keep in mind when enrolling in Medicare:</p>
        <ul>
          <li>Start researching your options early</li>
          <li>Consider all available coverage types</li>
          <li>Review your prescription drug needs</li>
          <li>Understand the costs involved</li>
        </ul>
      `
		},
		'medicare-advantage-vs-supplement': {
			title: 'Medicare Advantage vs. Medicare Supplement: Which is Right for You?',
			date: '2025-01-08',
			readTime: '7 min read',
			category: 'Coverage Options',
			image: '/images/medicare-comparison.webp',
			author: {
				name: 'Ed Slowinski',
				title: 'Certified Healthcare Advisor',
				image: '/images/ed.webp'
			},
			content: `
        <h2>Understanding Your Medicare Coverage Options</h2>
        <p>When it comes to Medicare coverage, two popular options are Medicare Advantage and Medicare Supplement plans. Let's explore the key differences to help you make an informed decision.</p>

        <h3>Medicare Advantage Plans</h3>
        <ul>
          <li>All-in-one plans that combine Original Medicare coverage</li>
          <li>Often include prescription drug coverage</li>
          <li>May offer additional benefits like dental and vision</li>
          <li>Usually have network restrictions</li>
        </ul>

        <h3>Medicare Supplement Plans</h3>
        <ul>
          <li>Work alongside Original Medicare</li>
          <li>Help cover out-of-pocket costs</li>
          <li>Offer more flexibility in choosing providers</li>
          <li>May have higher premiums</li>
        </ul>

        <h2>Making Your Decision</h2>
        <p>Consider these factors when choosing between Medicare Advantage and Medicare Supplement plans:</p>
        <ul>
          <li>Your budget for premiums and out-of-pocket costs</li>
          <li>Your preferred healthcare providers</li>
          <li>Your need for additional benefits</li>
          <li>Your travel plans and lifestyle</li>
        </ul>
      `
		},
		'medicare-changes-2025': {
			title: '2025 Medicare Changes You Need to Know',
			date: '2025-01-05',
			readTime: '6 min read',
			category: 'Medicare Updates',
			image: '/images/medicare-updates.webp',
			author: {
				name: 'Ed Slowinski',
				title: 'Certified Healthcare Advisor',
				image: '/images/ed.webp'
			},
			content: `
        <h2>Key Medicare Changes for 2025</h2>
        <p>Medicare undergoes changes each year to improve coverage and adapt to healthcare needs. Here are the important updates for 2025:</p>

        <h3>Premium and Deductible Updates</h3>
        <ul>
          <li>Part B premium adjustments</li>
          <li>Changes to deductible amounts</li>
          <li>Income-related monthly adjustment amounts</li>
        </ul>

        <h3>Coverage Improvements</h3>
        <ul>
          <li>Enhanced telehealth benefits</li>
          <li>New preventive service coverage</li>
          <li>Updates to prescription drug coverage</li>
        </ul>

        <h2>How These Changes Affect You</h2>
        <p>Understanding these updates helps you make informed decisions about your healthcare coverage:</p>
        <ul>
          <li>Review your current plan and coverage</li>
          <li>Compare costs and benefits</li>
          <li>Consider whether you need to make changes</li>
          <li>Consult with a Medicare advisor</li>
        </ul>
      `
		},
		'reducing-prescription-costs': {
			title: 'Tips for Reducing Your Medicare Prescription Drug Costs',
			date: '2025-01-03',
			readTime: '4 min read',
			category: 'Cost Savings',
			image: '/images/prescription-drugs.webp',
			author: {
				name: 'Ed Slowinski',
				title: 'Certified Healthcare Advisor',
				image: '/images/ed.webp'
			},
			content: `
        <h2>Strategies to Lower Your Medication Costs</h2>
        <p>Managing prescription drug costs is a crucial part of healthcare planning. Here are effective ways to reduce your expenses:</p>

        <h3>Understanding Your Coverage</h3>
        <ul>
          <li>Review your plan's formulary</li>
          <li>Know your copayments and deductibles</li>
          <li>Understand coverage phases</li>
        </ul>

        <h3>Cost-Saving Tips</h3>
        <ul>
          <li>Ask about generic alternatives</li>
          <li>Compare pharmacy prices</li>
          <li>Look into mail-order options</li>
          <li>Check for assistance programs</li>
        </ul>

        <h2>Additional Resources</h2>
        <p>Take advantage of these resources to further reduce your costs:</p>
        <ul>
          <li>Medicare Extra Help program</li>
          <li>State assistance programs</li>
          <li>Pharmaceutical company programs</li>
          <li>Discount pharmacy cards</li>
        </ul>
      `
		}
	};

	const post = posts[params.slug];

	if (!post) {
		throw error(404, 'Post not found');
	}

	// Function to strip HTML tags and create a clean excerpt
	function createExcerpt(html, length = 150) {
		const text = html.replace(/<\/?[^>]+(>|$)/g, '');
		const cleaned = text.replace(/\s+/g, ' ').trim();
		return cleaned.length > length ? cleaned.substring(0, length) + '...' : cleaned;
	}

	// Get related posts (excluding current post)
	const relatedPosts = Object.entries(posts)
		.filter(([slug]) => slug !== params.slug)
		.map(([slug, post]) => ({
			id: slug,
			title: post.title,
			excerpt: createExcerpt(post.content),
			date: post.date,
			category: post.category,
			image: post.image
		}));

	return {
		post,
		relatedPosts
	};
}
