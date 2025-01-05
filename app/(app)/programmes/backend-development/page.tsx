import Container from "@/components/shared/container";
import PageHero from "@/components/shared/hero";
import Module from "../frontend-development/module";
import { BACKEND_MODULE_1, BACKEND_MODULE_2, BACKEND_MODULE_3, BACKEND_MODULE_4 } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <PageHero
        text='Backend Development'
        description='IQ Hub Backend Development programme is beginner-friendly and project based. It is designed to help participants become job-ready'
        showBtn={true}
        linkHref='/register'
        linkText='Get Started'
        imageUrl='/full-stack.png'
      />
      <section className='space-y-12 py-8'>
        <div className='space-y-8'>
          <Container className='space-y-6 text-center'>
            <p className='text-sm font-medium'>CURRICULUM</p>
            <h2 className='text-center text-xl font-bold text-custom-darkBlue lg:text-3xl'>
              Backend Development Course Outline
            </h2>
          </Container>
          <div className='space-y-8'>
            <Module module={BACKEND_MODULE_1} number={1} />
            <Module module={BACKEND_MODULE_2} number={2} />
            <Module module={BACKEND_MODULE_3} number={3} />
            <Module module={BACKEND_MODULE_4} number={4} />
            <div className="flex items-center justify-center">
              <Button size="lg" className='hover:bg-white hover:text-primary hover:shadow' asChild>
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}