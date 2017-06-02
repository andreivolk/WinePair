import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'starRating' })
export class StarRatingPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(value: string, args: string[]): any {
        if (!value) return value;
        /*The API returns the user reviews as a value from 0 to 10.
        Each 2 points is a star with odd numbers being half stars.*/
        var starHTML;

        switch (value) {
            case "0":
                starHTML = '<md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "1":
                starHTML = '<md-icon class="material-icons mat-icon">star_half</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "2":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "3":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_half</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "4":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "5":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_half</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "6":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "7":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_half</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "8":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
                break;
            case "9":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star_half</md-icon>'
                break;
            case "10":
                starHTML = '<md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon><md-icon class="material-icons mat-icon">star</md-icon>'
                break;
            default:
                starHTML = '<md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon><md-icon class="material-icons mat-icon">star_border</md-icon>'
        }

        return this.sanitizer.bypassSecurityTrustHtml(starHTML);
    }
}
