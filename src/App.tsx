import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import Workflow from './components/sections/Workflow';
import Features from './components/sections/Features';
import Architecture from './components/sections/Architecture';
import InstallationWizard from './components/sections/InstallationWizard';
import UseCases from './components/sections/UseCases';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';

function App() {
    return (
        <div className="bg-bg text-text selection:bg-primary/30 selection:text-white min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <ProblemSolution />
                <Workflow />
                <Features />
                <Architecture />
                <InstallationWizard />
                <UseCases />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}

export default App;
