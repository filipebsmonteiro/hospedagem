import Chart from 'chart.js/dist/Chart.min';
import { initGlobalOptions } from "@/components/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
}
