"use client";

import { useState } from "react";
import { Check } from "lucide-react";

function SoftwareTestingProcess() {
    const [activeStep, setActiveStep] = useState(1);

    const process = [
        {
            stepNo: "STEP 01",
            name: "Discovery & Scope Definition",
            description:
                "We understand your business requirements, define testing objectives, identify application risks, and establish the scope, priorities, and success criteria for the testing process.",
            tags: ["Requirements", "Scope", "Risk Analysis"],
            points: [
                "Requirement analysis and test scope definition",
                "Risk identification and assessment",
                "Testing objectives and acceptance criteria",
                "Resource planning and timeline definition",
            ],
            bg: "bg-[#dcfce9]",
        },
        {
            stepNo: "STEP 02",
            name: "Test Plan & Strategy",
            description:
                "We write a detailed test plan covering test types, environments, tools, timelines, and resource allocation. For automation projects, we also define the framework architecture and CI/CD integration plan.",
            tags: ["Test Plan", "Tooling Strategy", "Environment Setup"],
            points: [
                "Test strategy & coverage definition",
                "Automation feasibility assessment",
                "Automation feasibility assessment",
                "CI/CD integration & tooling setup",
            ],
            bg: "bg-[#ffe8e2]",
        },
        {
            stepNo: "STEP 03",
            name: "Test Case Design & Review",
            description:
                "We design and review comprehensive test cases based on business requirements and user scenarios, ensuring critical workflows, edge cases, and expected results are clearly documented.",
            tags: ["Test Cases", "Test Scenarios", "Review"],
            points: [
                "Test case creation and documentation",
                "Positive and negative scenario coverage",
                "Boundary and edge-case testing",
                "Test case review and approval",
            ],
            bg: "bg-[#f0edff]",
        },
        {
            stepNo: "STEP 04",
            name: "Test Execution & Bug Reporting",
            description:
                "We execute planned test cases across the required environments, record actual results, identify defects, and provide clear, actionable bug reports for the development team.",
            tags: ["Execution", "Defect Tracking", "Reporting"],
            points: [
                "Manual and automated test execution",
                "Actual versus expected result validation",
                "Defect logging with reproducible steps",
                "Bug prioritization and tracking",
            ],
            bg: "bg-[#ffead9]",
        },
        {
            stepNo: "STEP 05",
            name: "Retesting & Regression Cycles",
            description:
                "We verify bug fixes and rerun relevant test suites to ensure that changes do not introduce new issues or affect existing application functionality.",
            tags: ["Retesting", "Regression", "Validation"],
            points: [
                "Bug fix verification and retesting",
                "Regression suite execution",
                "Integration and compatibility validation",
                "Final defect status verification",
            ],
            bg: "bg-[#dcfce9]",
        },
        {
            stepNo: "STEP 06",
            name: "Final Report & Handover",
            description:
                "We consolidate test results, defect summaries, coverage metrics, and outstanding risks into a final report, providing clear documentation and recommendations for release readiness.",
            tags: ["Test Report", "Documentation", "Handover"],
            points: [
                "Test execution summary and coverage report",
                "Defect metrics and outstanding issues",
                "Release readiness assessment",
                "Final documentation and handover",
            ],
            bg: "bg-[#fff3d4]",
        },
    ];

    return (
        <section className="my-20 w-full overflow-hidden bg-[#f7f7f8] px-6 py-16 sm:px-8 lg:px-6 xl:px-28">
            <div className="pb-8 text-center">
                <h2 className="font-baumans text-[16px] font-bold text-[#000099]">
                    How We Test
                </h2>

                <p className="mx-auto mt-8 max-w-4xl font-baumans text-[32px] font-bold leading-tight text-black sm:text-[36px] lg:text-[40px]">
                    Brief In,{" "}
                    <span className="text-[#000099]">
                        Clean Build Out
                    </span>
                </p>
            </div>

            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4 lg:overflow-x-auto lg:overflow-y-hidden lg:pb-2 lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
                {process.map((item, index) => {
                    const isActive = activeStep === index;

                    return (
                        <button
                            key={item.stepNo}
                            type="button"
                            onClick={() => setActiveStep(index)}
                            aria-expanded={isActive}
                            aria-label={`${item.stepNo}: ${item.name}`}
                            className={`relative w-full shrink-0 overflow-hidden rounded-[10px] text-left transition-[width,min-height] duration-500 ease-in-out lg:min-h-[430px] ${
                                isActive
                                    ? "min-h-0 lg:w-[678px]"
                                    : "h-[76px] min-h-[76px] lg:h-auto lg:w-[74px]"
                            } ${item.bg}`}
                        >
                            {isActive ? (
                                <div className="px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[430px] lg:px-14 lg:py-14">
                                    <div className="flex items-center gap-3">
                                        <span className="h-[3px] w-4 shrink-0 bg-[#000099]" />

                                        <span className="font-poppins text-[12px] font-medium text-[#000099] sm:text-[13px]">
                                            {item.stepNo}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 font-baumans text-[22px] font-bold leading-snug text-black sm:text-[24px]">
                                        {item.name}
                                    </h3>

                                    <p className="mt-3 max-w-[610px] font-poppins text-[14px] font-medium leading-6 text-[#54595f] sm:text-[15px]">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2.5">
                                        {item.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="whitespace-nowrap rounded-full border border-[#dedfff] bg-[#f1f1ff] px-4 py-1.5 font-poppins text-[11px] font-medium text-[#000099] sm:px-5 sm:text-[12px]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-5 space-y-3">
                                        {item.points.map((point, pointIndex) => (
                                            <div
                                                key={`${point}-${pointIndex}`}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="mt-1 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full bg-[#000099] text-white">
                                                    <Check
                                                        size={11}
                                                        strokeWidth={3}
                                                    />
                                                </span>

                                                <span className="font-poppins text-[13px] font-medium leading-5 text-[#344054] sm:text-[14px]">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className="flex h-[76px] w-full items-center justify-center px-4 text-center lg:hidden">
                                        <span className="line-clamp-2 w-full font-baumans text-[16px] font-bold leading-5 text-black sm:text-[18px]">
                                            {item.name}
                                        </span>
                                    </div>

                                    <div className="hidden h-full min-h-[430px] w-full items-center justify-center lg:flex">
                                        <span
                                            className="whitespace-nowrap font-baumans text-[22px] font-bold text-black"
                                            style={{
                                                writingMode: "vertical-rl",
                                                transform: "rotate(180deg)",
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </div>
                                </>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

export default SoftwareTestingProcess;
