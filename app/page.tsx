import ShadeSlider from "@/components/ShadeSlider";
import { BRAND_COLORS } from "@/styles/colors";

export default function Home() {
  return (
    <>
      <ShadeSlider />

      <main
        className="w-full h-screen flex flex-col items-center justify-center gap-10"
        style={{
          background: `linear-gradient(135deg,
            ${BRAND_COLORS.background.dark},
            ${BRAND_COLORS.background.mid},
            ${BRAND_COLORS.background.light}
          )`,
        }}
      >
        <h1 className="text-5xl md:text-5xl font-extrabold -tracking-tight capitalize">luxetryst</h1>
        <h1
          className="text-5xl md:text-8xl font-extrabold tracking-tight"
          style={{ color: BRAND_COLORS.text.primary }}
        >
          Coming Soon
        </h1>

      </main>
    </>
  );
}
