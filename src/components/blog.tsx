/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/G33ruOQ74YV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Judson } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

judson({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { JSX, SVGProps } from "react";

export function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-background border-b">
        <div className="container max-w-[1200px] mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-auto">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              News
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Insights
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              About
            </Link>
          </nav>
          <Button className="ml-auto">Contact Us</Button>
        </div>
      </header>
      <div className="text-left">
        <h2 className="container max-w-[1200px] mx-auto px-4 md:px-6 text-3xl font-bold my-4">
          Company's blog
        </h2>
      </div>
      <main className="flex-1">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Introducing the Latest Product Update
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Streamlining Your Workflow with Our New Tools
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Mastering the Art of Effective Communication
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Mastering the Art of Effective Communication
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Mastering the Art of Effective Communication
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Mastering the Art of Effective Communication
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Tabs defaultValue="all">
              <TabsList className="mb-8 flex flex-wrap gap-2 justify-center">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="news">News</TabsTrigger>
                <TabsTrigger value="insights">Industry Insights</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
                <TabsTrigger value="technology">Technology</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Introducing the Latest Product Update
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Unlocking the Secrets of Successful Startups
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Optimizing Your Workflow for Maximum Efficiency
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Exploring the Future of Artificial Intelligence
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Navigating the Changing Landscape of Marketing
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          The Rise of Remote Work: Challenges and Opportunities
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Mastering the Art of Effective Networking
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Embracing Sustainability: Trends and Innovations
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="news">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="p-2">
                    <Card>
                      <img
                        src="/placeholder.svg"
                        alt="Article Image"
                        width={450}
                        height={285}
                        className="rounded-t-md object-cover"
                      />
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Breaking News: Company Announces Major Expansion
                        </h3>
                        <p className="text-muted-foreground line-clamp-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nec
                          ultricies lacus.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
