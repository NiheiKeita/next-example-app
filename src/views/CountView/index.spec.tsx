import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./index.stories";
const { Test } = composeStories(stories);

describe("画面テスト", () => {
  test("画面テスト", async () => {
    const { container } = render(<Test />);
    await Test.play({ canvasElement: container }); 
  });
})