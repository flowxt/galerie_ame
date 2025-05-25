"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminTestStatus() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Charger toutes les œuvres
  const loadAllArtworks = async () => {
    setLoading(true);
    try {
      // Cette requête récupère TOUTES les œuvres peu importe le statut
      const response = await fetch("/api/admin/all-artworks");
      const data = await response.json();
      setArtworks(data.artworks || []);
    } catch (error) {
      console.error("Erreur:", error);
      setMessage("Erreur lors du chargement");
    } finally {
      setLoading(false);
    }
  };

  // Changer le statut d'une œuvre
  const updateStatus = async (artworkId, newStatus) => {
    setLoading(true);
    try {
      const response = await fetch("/api/update-artwork-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          artworkId,
          status: newStatus,
          soldDate: newStatus === "sold" ? new Date().toISOString() : null,
        }),
      });

      if (response.ok) {
        setMessage(`✅ Statut mis à jour: ${newStatus}`);
        loadAllArtworks(); // Recharger la liste
      } else {
        throw new Error("Erreur de mise à jour");
      }
    } catch (error) {
      setMessage(`❌ Erreur: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllArtworks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              🔧 Admin - Test des Statuts
            </h1>
            <Link
              href="/"
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              ← Retour au site
            </Link>
          </div>

          {message && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">{message}</p>
            </div>
          )}

          <div className="mb-4 flex gap-3">
            <button
              onClick={loadAllArtworks}
              disabled={loading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              🔄 Recharger
            </button>
            <Link
              href="/deja-realise"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              👀 Voir "Déjà réalisé"
            </Link>
          </div>

          {loading && (
            <div className="text-center py-8">
              <p className="text-gray-600">Chargement...</p>
            </div>
          )}

          {artworks.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-3 text-left">
                      Titre
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Catégorie
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Prix
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Statut actuel
                    </th>
                    <th className="border border-gray-300 p-3 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {artworks.map((artwork) => (
                    <tr key={artwork._id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-3">
                        <div className="font-medium">{artwork.title}</div>
                        <div className="text-sm text-gray-500">
                          {artwork._id}
                        </div>
                      </td>
                      <td className="border border-gray-300 p-3">
                        {artwork.category}
                      </td>
                      <td className="border border-gray-300 p-3">
                        {artwork.price}€
                      </td>
                      <td className="border border-gray-300 p-3">
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            artwork.status === "available"
                              ? "bg-green-100 text-green-800"
                              : artwork.status === "reserved"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {artwork.status === "available" && "✅ Disponible"}
                          {artwork.status === "reserved" && "🔶 Réservé"}
                          {artwork.status === "sold" && "❌ Vendu"}
                        </span>
                        {artwork.soldDate && (
                          <div className="text-xs text-gray-500 mt-1">
                            Vendu:{" "}
                            {new Date(artwork.soldDate).toLocaleDateString()}
                          </div>
                        )}
                      </td>
                      <td className="border border-gray-300 p-3">
                        <div className="flex gap-1 flex-wrap">
                          <button
                            onClick={() =>
                              updateStatus(artwork._id, "available")
                            }
                            disabled={loading || artwork.status === "available"}
                            className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 disabled:opacity-50"
                          >
                            ✅ Disponible
                          </button>
                          <button
                            onClick={() =>
                              updateStatus(artwork._id, "reserved")
                            }
                            disabled={loading || artwork.status === "reserved"}
                            className="bg-orange-500 text-white px-2 py-1 rounded text-xs hover:bg-orange-600 disabled:opacity-50"
                          >
                            🔶 Réservé
                          </button>
                          <button
                            onClick={() => updateStatus(artwork._id, "sold")}
                            disabled={loading || artwork.status === "sold"}
                            className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600 disabled:opacity-50"
                          >
                            ❌ Vendu
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {artworks.length === 0 && !loading && (
            <div className="text-center py-8">
              <p className="text-gray-600">Aucune œuvre trouvée</p>
            </div>
          )}

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-medium text-yellow-900 mb-2">
              ℹ️ Comment tester :
            </h3>
            <ol className="text-yellow-800 text-sm space-y-1">
              <li>1. Mettez une œuvre en "Vendu" avec le bouton rouge</li>
              <li>
                2. Allez sur la page "Déjà réalisé" pour voir si elle apparaît
              </li>
              <li>3. Vérifiez qu'elle ne s'affiche plus dans la boutique</li>
              <li>4. Remettez en "Disponible" pour la remettre en vente</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
