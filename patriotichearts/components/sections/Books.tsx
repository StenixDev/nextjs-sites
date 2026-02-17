"use client";

import { Book } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { BOOKS } from "@/data/siteData";

export default function Books() {
  return (
    <section id="books" className="py-16 md:py-24 bg-patriotic-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Books by Mark Baird"
          subtitle="Inspiring reads for patriots and veterans"
          className="text-white"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {BOOKS.map((book) => (
            <Card
              key={book.id}
              className="text-center h-full bg-white/10 backdrop-blur-sm border-none"
            >
              <div className="w-24 h-32 bg-patriotic-red rounded-md flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Book className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-lg font-serif font-bold mb-1">{book.title}</h3>
              <p className="text-gray-300 text-sm mb-4">by {book.author}</p>
              <Button
                variant="gold"
                size="sm"
                href={book.amazonLink}
                className="w-full justify-center"
              >
                Buy on Amazon
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
