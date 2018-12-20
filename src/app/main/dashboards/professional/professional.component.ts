import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProfessionalDashboardService } from './professional.service';
import { albumAnimations } from '../../../../@album/animations';
import { MyService } from '../../../fake-db/shared-db.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : albumAnimations,
})
export class ProfessionalComponent implements OnInit {
  widgets: any;
  widget1SelectedYear = '2018';
  widget5SelectedDay = 'today';

  /**
   * Constructor
   *
   * @param {ProfessionalDashboardService} _professionalDashboardService
   */
  constructor(
      private _professionalDashboardService: ProfessionalDashboardService,
      private myService: MyService,
      private router: Router
  ) {
      // Register the custom chart.js plugin
      this._registerCustomChartJSPlugin();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
      // Get the widgets from the service
      this.widgets = this._professionalDashboardService.widgets;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register a custom plugin
   */
  private _registerCustomChartJSPlugin(): void {
      (<any>window).Chart.plugins.register({
          afterDatasetsDraw: function (chart, easing) {
              // Only activate the plugin if it's made available
              // in the options
              if (
                  !chart.options.plugins.xLabelsOnTop ||
                  (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
              ) {
                  return;
              }

              // To only draw at the end of animation, check for easing === 1
              const ctx = chart.ctx;

              chart.data.datasets.forEach(function (dataset, i) {
                  const meta = chart.getDatasetMeta(i);
                  if ( !meta.hidden ) {
                      meta.data.forEach(function (element, index) {

                          // Draw the text in black, with the specified font
                          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                          const fontSize = 13;
                          const fontStyle = 'normal';
                          const fontFamily = 'Roboto, Helvetica Neue, Arial';
                          ctx.font = (<any>window).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                          // Just naively convert to string for now
                          const dataString = dataset.data[index].toString() + 'H';

                          // Make sure alignment settings are correct
                          ctx.textAlign = 'center';
                          ctx.textBaseline = 'middle';
                          const padding = 15;
                          const startY = 24;
                          const position = element.tooltipPosition();
                          ctx.fillText(dataString, position.x, startY);

                          ctx.save();

                          ctx.beginPath();
                          ctx.setLineDash([5, 3]);
                          ctx.moveTo(position.x, startY + padding);
                          ctx.lineTo(position.x, position.y - padding);
                          ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                          ctx.stroke();

                          ctx.restore();
                      });
                  }
              });
          }
      });
  }

  public viewProjectDetails(id) {
   // this.myService.sendMessage(id);
   this.myService.id = id;
    this.router.navigate(['main/dashboards/projects']);
  }
}


