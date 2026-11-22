import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/site";

export const alt = "Sebastian Cetina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "home" });

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 90px",
                    background: "#0a0c0f",
                    color: "#e8ecf1",
                }}
            >
                <div style={{ display: "flex", fontSize: 30, color: "#8a94a3" }}>
                    <span style={{ color: "#4ade80" }}>$</span>
                    <span style={{ marginLeft: 16 }}>whoami</span>
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 96,
                        fontWeight: 700,
                        marginTop: 24,
                    }}
                >
                    {SITE.name}
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 54,
                        fontWeight: 600,
                        color: "#4ade80",
                        marginTop: 8,
                    }}
                >
                    {t("role")}
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 32,
                        color: "#8a94a3",
                        marginTop: 36,
                    }}
                >
                    Java · Spring Boot · PostgreSQL · Docker
                </div>
                <div
                    style={{
                        display: "flex",
                        fontSize: 28,
                        color: "#c3cad5",
                        marginTop: 12,
                    }}
                >
                    {t("student")} · {t("location")}
                </div>
            </div>
        ),
        { ...size },
    );
}
