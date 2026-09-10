import { describe, it, expect } from "vitest";
import { buildOrganizationSchema, buildProductSchema, buildPageMeta } from "@/lib/seo";

describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });

  it("builds construction SEO schema and page metadata", () => {
    const organization = buildOrganizationSchema();
    const product = buildProductSchema({
      name: "SPC Flooring",
      description: "Waterproof flooring for reliable construction projects.",
      image: "https://example.com/spc-flooring.jpg",
      category: "Flooring",
      brand: "Trust Construction Company",
    });
    const meta = buildPageMeta({
      title: "Trust Construction Company | Building Materials",
      description: "Construction supplies and installation services for homes and projects.",
      path: "/products",
    });

    expect(organization.name).toBe("Trust Construction Company");
    expect(organization.url).toContain("trustconstructionltd.com");
    expect(product.name).toBe("SPC Flooring");
    expect(product.category).toBe("Flooring");
    expect(meta.title).toContain("Trust Construction Company");
    expect(meta.description.length).toBeGreaterThan(40);
  });
});
