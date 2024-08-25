"use client";

import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "../ui/tabs";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { portfolio, projectTab } from "@/data";

// Define the ProjectTab type
type ProjectTab = {
  id: number;
  title: string;
  value: string;
  projects: number[];
};

const ProjectsDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  const [currentTab, setCurrentTab] = useState<ProjectTab>(projectTab[0]);

  // Reset pagination when currentTab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(currentTab.projects.length / projectsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const tabs: Tab<ProjectTab>[] = projectTab.map((tab) => ({
    id: tab.id,
    title: tab.title,
    value: tab.value,
    extraData: tab, // Ensure `extraData` contains the full tab information
    content: (
      <div>
        <CardContainer className="inter-var grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
          {tab.projects
            .slice(
              (currentPage - 1) * projectsPerPage,
              currentPage * projectsPerPage
            )
            .map((projectId) => {
              const project = portfolio.find((item) => item.id === projectId);
              return (
                <CardBody
                  key={projectId}
                  className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border"
                >
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img
                      src={project?.img || ""}
                      alt="thumbnail"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
                  >
                    {project?.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project?.des}
                  </CardItem>

                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project?.link || "#"}
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Learn More →
                    </CardItem>
                  </div>
                </CardBody>
              );
            })}
        </CardContainer>

        {/* Pagination */}
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationPrevious
              onClick={handlePrevPage}
              className={`cursor-pointer ${
                currentPage === 1 ? "text-gray-400" : "text-blue-600"
              }`}
            >
              Previous
            </PaginationPrevious>
            <PaginationItem>
              Page {currentPage} of{" "}
              {Math.ceil(tab.projects.length / projectsPerPage)}
            </PaginationItem>
            <PaginationNext
              onClick={handleNextPage}
              className={`cursor-pointer ${
                currentPage === Math.ceil(tab.projects.length / projectsPerPage)
                  ? "text-gray-400"
                  : "text-blue-600"
              }`}
            >
              Next
            </PaginationNext>
          </PaginationContent>
        </Pagination>
      </div>
    ),
  }));

  return (
    <div className="relative max-w-5xl mx-auto py-20">
      <Tabs
        tabs={tabs}
        containerClassName="inter-var"
        buttonClassName="text-white dark:text-neutral-300"
        contentClassName="mt-4"
        onTabChange={(tab) => {
          // Ensure tab has extraData and projects field
          if (tab.extraData && (tab.extraData as ProjectTab).projects) {
            setCurrentTab(tab.extraData as ProjectTab);
            setCurrentPage(1); // Reset pagination on tab change
          } else {
            console.error("Tab data is invalid:", tab);
          }
        }}
      />
    </div>
  );
};

export default ProjectsDetails;
