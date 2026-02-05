import StoryContent from '@/components/stories/StoryContent'
import RelatedStories from '@/components/stories/RelatedStories'
import Newsletter from '@/components/home/Newsletter'

const DUMMY_STORY = {
    title: "Victorit's Tech Start: A Journey of Curiosity and Resilience",
    category: "SOFTWARE ENGINEERING",
    author: "Victorit",
    date: "Feb 1, 2026",
    readTime: "5 min read",
    image: "/Featured.jpg",
    content: [
        "In the heart of Lagos, a young mind was humming with questions. Growing up, technology felt like magic, a black box that everyone used but few understood. Victorit wasn't content with just using; they wanted to build.",
        "The journey began with a dusty second-hand laptop and a patchy internet connection. Nights were spent under the glow of a screen, deciphering the cryptic syntax of HTML and CSS. It wasn't just about code; it was about the power to create something out of nothing.",
        "> My first line of code that actually worked felt like discovering a superpower. It didn't matter that it was just a blue heading; what mattered was that I told the computer to do something, and it obeyed.",
        "But the path wasn't always smooth. In a landscape where electricity is a luxury and data is expensive, resilience becomes as important as technical skill. There were weeks of frustration, of bugs that refused to be squashed, and of feeling like an imposter in a global field.",
        "Through Moka, Victorit shares the moments of grit that defined their career. From the first 'Hello World' to leading complex engineering projects, the message remains the same: Curiosity is your compass, and resilience is your engine.",
        "Today, Victorit is building solutions that impact thousands. But they never forget the dusty laptop and the curiosity that started it all."
    ],
    takeaways: [
        "Start before you feel ready; curiosity is the only prerequisite.",
        "Resilience is a learned skill, not just a trait.",
        "Community and sharing your journey accelerates your growth.",
        "Never lose the 'beginner's mind' no matter how senior you become."
    ]
}

export default function StoryDetailPage({ params }: { params: { slug: string } }) {
    return (
        <main className="min-h-screen bg-white">
            <StoryContent story={DUMMY_STORY} />
            <RelatedStories />
            <Newsletter />
        </main>
    )
}

export async function generateStaticParams() {
    return [
        { slug: '1' },
        { slug: '2' },
        { slug: '3' },
        { slug: '4' },
        { slug: '5' },
        { slug: '6' }
    ]
}
