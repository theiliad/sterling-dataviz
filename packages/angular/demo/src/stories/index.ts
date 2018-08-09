import { storiesOf } from "@storybook/angular";

import { colors, randomizeValue } from "../helpers/commons";

import { ChartsModule } from "../../../src/charts.module";
import { PieComponent } from "../pie/pie.component";
import { DonutComponent } from "../donut/donut.component";

const pieStories = storiesOf("Pie", module);
pieStories.add("Basic", () => ({
  component: PieComponent,
  moduleMetadata: {
    imports: [ChartsModule]
  },
  props: {
    pieData: {
      labels: ["2V2N-9KYPM version 1", "L22I-P66EP-L22I-P66EP-L22I-P66EP", "JQAI-2M4L1", "J9DZ-F37AP",
        "YEL48-Q6XK-YEL48", "P66EP-L22I-L22I", "Q6XK-YEL48", "XKB5-L6EP", "YEL48-Q6XK", "L22I-P66EP-L22I"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColors: colors,
          data: [100000, 200000, 600000, 100000, 400000, 450000, 300000, 70000, 20000, 120000]
        }
      ]
    }
  },
}));

const donutStories = storiesOf("Donut", module);
donutStories.add("Basic", () => ({
  component: DonutComponent,
  moduleMetadata: {
    imports: [ChartsModule]
  },
  props: {
    donutData: {
      labels: ["2V2N-9KYPM version 1", "L22I-P66EP-L22I-P66EP-L22I-P66EP", "JQAI-2M4L1", "J9DZ-F37AP",
        "YEL48-Q6XK-YEL48", "P66EP-L22I-L22I", "Q6XK-YEL48", "XKB5-L6EP", "YEL48-Q6XK", "L22I-P66EP-L22I"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColors: colors,
          data: [100000, 200000, 600000, 100000, 400000, 450000, 300000, 70000, 20000, 120000]
        }
      ]
    }
  },
}));
