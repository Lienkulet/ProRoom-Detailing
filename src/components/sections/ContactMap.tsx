"use client"

import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"

const LAT = 47.0315884
const LNG = 28.7678223

const MARKER_HTML = `
  <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 32 40" fill="none">
      <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 24 16 24S32 28 32 16C32 7.16 24.84 0 16 0Z" fill="#b0b0b0"/>
      <circle cx="16" cy="16" r="6" fill="#1a1a1a"/>
    </svg>
  </div>
`

export default function ContactMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<import("leaflet").Map | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    let cancelled = false

    import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return

      const map = L.map(containerRef.current, {
        center: [LAT, LNG],
        zoom: 14,
        scrollWheelZoom: false,
        zoomControl: true,
      })

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://carto.com/">CartoDB</a>',
        maxZoom: 19,
      }).addTo(map)

      const icon = L.divIcon({
        className: "",
        html: MARKER_HTML,
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -36],
      })

      L.marker([LAT, LNG], { icon })
        .addTo(map)
        .bindPopup(
          "<strong>Pro Room Detailing</strong><br/>Strada Tudor Vladimirescu 79<br/>Durleşti, MD-2003, Moldova"
        )

      mapRef.current = map
    })

    return () => {
      cancelled = true
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="contact-map-wrap"
    />
  )
}
