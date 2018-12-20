import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[albumWidgetToggle]'
})
export class AlbumWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
