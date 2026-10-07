import Link from "next/link";
import Image from "next/image";

function BlogPage() {

    const blogs = [
        {
            category: "BLOG",
            date: "2026-05-07",
            title: "The Ultimate Guide to Starting an E-commerce Business in Coimbatore (2026)",
            description:
                "Learn how to start an e-commerce business in Coimbatore in 2026. Step-by-step guide covering registration, sourcing, platform selection, costs, legal...",
            author: "Gokul Krishnan",
            image: "/BlogImage/Blog1.webp",
            link: "blog/start-ecommerce-business-coimbatore-guide",
        },
        {
            category: "BLOG",
            date: "2026-05-20",
            title: "How Much Does an Ecommerce Website Cost in Coimbatore in 2026?",
            description:
                "Discover ecommerce website development cost in Coimbatore for 2026. Compare pricing, packages, features, and factors that affect your online store...",
            author: "Gokul Krishnan",
            image: "/BlogImage/Blog2.webp",
            link: "/blog/how-much-does-an-ecommerce-website-cost-in-coimbatore",
        },
    ];

    const getTimeAgo = (date) => {
        const postDate = new Date(date);
        const currentDate = new Date();

        const difference = currentDate - postDate;

        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (seconds < 60) {
            return "Just now";
        }

        if (minutes < 60) {
            return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
        }

        if (hours < 24) {
            return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
        }

        if (days < 7) {
            return `${days} ${days === 1 ? "day" : "days"} ago`;
        }

        if (weeks < 4) {
            return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
        }

        if (months < 12) {
            return `${months} ${months === 1 ? "month" : "months"} ago`;
        }

        return `${years} ${years === 1 ? "year" : "years"} ago`;
    };

    return (
        <section className="px-6 pb-20 pt-10 sm:px-10 lg:px-20 xl:px-30">

            <div className="mx-auto max-w-[1200px]">

                <div className="mt-16 flex flex-col gap-6">

                    {blogs.map((blog, index) => (

                        <Link
                            href={blog.link}
                            key={index}
                            className="group block overflow-hidden rounded-md border-none hover:shadow-md"
                        >

                            <div className="grid grid-cols-1 lg:grid-cols-2">

                                <div className="relative min-h-[300px] w-full overflow-hidden lg:min-h-[320px]">

                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="rounded-md object-contain"
                                    />

                                </div>

                                <div className="flex flex-col justify-center px-7 py-8 lg:px-14">

                                    <div>

                                        <span className="font-poppins text-[12px] font-medium text-[#777777]">
                                            {getTimeAgo(blog.date)}
                                        </span>

                                    </div>

                                    <h2 className="mt-5 font-baumans text-[30px] font-bold leading-tight text-[#000000] lg:text-[34px]">
                                        {blog.title}
                                    </h2>

                                    <p className="mt-4 max-w-[550px] font-poppins text-[14px] font-medium leading-6 text-[#54595f]">
                                        {blog.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-3">

                                        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#e5e5e5]">

                                            <span className="font-poppins text-[14px] font-semibold text-[#777777]">
                                                {blog.author.charAt(0)}
                                            </span>

                                        </div>

                                        <span className="font-poppins text-[12px] font-medium text-[#54595f]">
                                            {blog.author}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default BlogPage;