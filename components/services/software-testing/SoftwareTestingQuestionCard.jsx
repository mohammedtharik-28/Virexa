"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

function SoftwareTestingQuestionCard() {
    const [answerOpen, setAnswerOpen] = useState(0);

    const QuestionAndAnswers = [
        {
            question: "How quickly can you start testing our software?",
            answer:
                "We can onboard and begin testing within 24–48 hours of a kickoff call. Your first test report — with bugs logged, prioritised, and documented — is delivered within 48 hours of testing starting. For embedded retainer engagements, we align with your sprint schedule from day one.",
        },
        {
            question: "Manual testing vs test automation — which do I need?",
            answer:
                "Most products need both. Manual testing catches UX issues, edge cases, and exploratory bugs that scripts can't find. Test automation is essential for regression — ensuring new code doesn't break existing functionality. We assess your product and release cadence, then recommend the right balance of manual and automated testing.",
        },
        {
            question: "Can you integrate with our existing CI/CD pipeline?",
            answer:
                "Yes — we're CI/CD native. We integrate automation suites with GitHub Actions, GitLab CI, Jenkins, CircleCI, and most other platforms. Every code commit or pull request can trigger automated test runs automatically. We handle the full integration setup as part of the engagement.",
        },
        {
            question: "What bug tracking tools do you work with?",
            answer:
                "We work with whatever your team uses — Jira, Linear, Notion, GitHub Issues, ClickUp, or any other tracker. Every bug is logged with severity classification, steps to reproduce, environment details, screen recordings or screenshots, and suggested fix direction. Your developers can action bugs immediately.",
        },
        {
            question: "Do you do security and penetration testing?",
            answer:
                "Yes. Our security testing covers the OWASP Top 10 — including SQL injection, XSS, CSRF, broken authentication, sensitive data exposure, and more. We provide a detailed security audit report with risk ratings, affected components, and prioritised remediation steps. Available as a standalone engagement or as part of the Enterprise QA Suite.",
        },
    ];

    return (
        <section className="mt-30 bg-gray-100 px-6 py-20 sm:px-10 sm:py-24 lg:px-20 lg:py-25 xl:px-28">
            <div className="text-center">
                <h1 className="font-baumans text-[30px] font-bold text-[#000000] sm:text-[34px] lg:text-[36px]">
                    Frequently asked{" "}
                    <span className="text-[#000099]">
                        questions
                    </span>
                </h1>
            </div>

            <div className="mx-auto mt-10 w-full max-w-[1200px]">
                {QuestionAndAnswers.map((items, id) => (
                    <div
                        key={id}
                        className="border-b border-gray-200"
                    >
                        <button
                            onClick={() =>
                                setAnswerOpen(
                                    answerOpen === id ? null : id
                                )
                            }
                            className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6 cursor-pointer"
                        >
                            <p className="font-baumans text-[18px] font-bold text-[#000000] sm:text-[21px] lg:text-[20px]">
                                {items.question}
                            </p>

                            <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#000000] transition-transform duration-300">
                                {answerOpen === id ? (
                                    <Minus size={24} strokeWidth={4}  className="text-[#000099]"/>
                                ) : (
                                    <Plus size={24} strokeWidth={4} />
                                )}
                            </span>
                        </button>

                        <div
                            className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                                answerOpen === id
                                    ? "grid-rows-[1fr] opacity-100"
                                    : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <div className="border-t border-gray-200 pb-6 pt-5 sm:pr-10">
                                    <p className="font-poppins text-[15px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                        {items.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SoftwareTestingQuestionCard;