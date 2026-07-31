import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import App from "../App";
import AppProvider from "../context/AppProvider";
import { portfolioData } from "../data/portfolioData";
import { postPortfolioData } from "../services/portfolioApi";

vi.mock("../services/portfolioApi", () => ({
  postPortfolioData: vi.fn(),
}));

const renderApp = () => {
  return render(
    <AppProvider>
      <App />
    </AppProvider>,
  );
};

describe("Portfolio application", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");

    postPortfolioData.mockResolvedValue(portfolioData);
  });

  it("uygulamanın temel bölümlerini gösterir", async () => {
    renderApp();

    expect(
      await screen.findByText("I am a Frontend Developer..."),
    ).toBeInTheDocument();

    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Send me a message!")).toBeInTheDocument();
  });

  it("dili İngilizceden Türkçeye değiştirir", async () => {
    const user = userEvent.setup();

    renderApp();

    const languageButton = await screen.findByRole("button", {
      name: "TÜRKÇE'YE GEÇ",
    });

    await user.click(languageButton);

    expect(
      screen.getByText("Ben bir Frontend Developer'ım..."),
    ).toBeInTheDocument();

    expect(screen.getByText("Yetenekler")).toBeInTheDocument();
    expect(screen.getByText("Profil")).toBeInTheDocument();
    expect(screen.getByText("Projeler")).toBeInTheDocument();
  });

  it("dark mode açıp kapatır", async () => {
    const user = userEvent.setup();

    renderApp();

    const themeSwitch = await screen.findByRole("switch");

    expect(themeSwitch).toHaveAttribute("aria-checked", "false");
    expect(document.documentElement).not.toHaveClass("dark");

    await user.click(themeSwitch);

    expect(themeSwitch).toHaveAttribute("aria-checked", "true");
    expect(document.documentElement).toHaveClass("dark");
    expect(screen.getByText("LIGHT MODE")).toBeInTheDocument();
  });

  it("portföy verilerini API servisine gönderir", async () => {
    renderApp();

    await screen.findByText("I am a Frontend Developer...");

    expect(postPortfolioData).toHaveBeenCalledWith(portfolioData);
  });

  it("API isteği başarısız olsa bile yerel veriyi gösterir", async () => {
    postPortfolioData.mockRejectedValueOnce(new Error("API error"));

    renderApp();

    expect(
      await screen.findByText("I am a Frontend Developer..."),
    ).toBeInTheDocument();

    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});
