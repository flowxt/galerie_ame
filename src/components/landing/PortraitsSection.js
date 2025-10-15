"use client";
import Image from "next/image";
import { Sparkles, Heart } from "lucide-react";

export default function PortraitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 rounded-full px-6 py-3 mb-6">
            <Heart className="w-5 h-5 text-rose-600" />
            <span className="text-rose-800 font-medium">
              Présentation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-light text-gray-800 mb-6">
            À propos de{" "}
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-medium">
              Véronique
            </span>
          </h2>
        </div>

        {/* Section texte de présentation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-3xl p-10 md:p-12 border border-rose-200/50 shadow-elegant">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-crimson">
              <p>
                Artiste intuitive et passionnée, la création fait partie de moi depuis toujours.
              </p>
              <p>
                Après un passage de vie profond, elle a pris une autre dimension — plus libre, 
                plus essentielle, plus en accord avec ce que je suis aujourd&apos;hui.
              </p>
              <p>
                De cet élan est né <span className="font-semibold text-rose-600">Atelier Art&apos;âme</span> : 
                un espace où se rencontrent couleurs, matières, symboles et ressentis, 
                dans une approche profondément authentique.
              </p>
              <p>
                Ce que je cherche à travers mon travail, c&apos;est à faire vibrer l&apos;essentiel — 
                ce fil invisible qui relie la beauté, la vie et l&apos;émotion.
              </p>
              <p>
                <span className="font-semibold text-gray-800">One Life</span> : deux mots simples, 
                mais qui portent pour moi tout un sens — vivre pleinement, avec sincérité, 
                liberté et élan créatif.
              </p>
              <p>
                Ma rose des vents, peinte à l&apos;aquarelle, incarne cette direction intérieure : 
                celle du cœur, du partage et de la lumière.
              </p>
              <p className="italic text-gray-600">
                Si mes créations parviennent à éveiller, ne serait-ce qu&apos;un instant, 
                ce retour à soi et à l&apos;essentiel, alors tout prend sens…
              </p>
            </div>
          </div>
        </div>

        {/* Section photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-spiritual transition-all duration-500 hover-lift">
            <Image
              src="/images/presentation.jpg"
              alt="Véronique - Artiste créatrice"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-elegant hover:shadow-spiritual transition-all duration-500 hover-lift">
            <Image
              src="/images/presentation2.jpg"
              alt="Rose des vents - Aquarelle de Véronique"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
