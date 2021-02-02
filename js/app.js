// var targetElm = document.querySelector('.boxChild'),  // reference to scroll target
//     button = document.querySelector('button');        // button that triggers the scroll
  
// // bind "click" event to a button 
// button.addEventListener('click', function(){
//    targetElm.scrollIntoView()
// })


// var counter = 1;
// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 5) counter = 1;
// }, 500);


window.addEventListener('load', function(){
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
		windowTop > 100
			? $("header").addClass("fixed")
			: $("header").removeClass("fixed");
		// windowTop > 100 ? $("header").css("height", "100px") : $("header").css("height", "160px");
	});


	(function() {
		
	  
		(function() {
		  var footer;
		  footer = '<footer id="footer" role="contentinfo"> <div class="container"> <h3 class="footer-title"> <a href="https://codepen.io/collection/XRoxGR" target="_blank">Calibration template</a> </h3> <p class="footer-entry"> <a href="https://mobilemarkup.com" target="_blank">mobileMarkup.com</a> </p> </div> </footer>';
		  document.body.insertAdjacentHTML('beforeend', footerclass(floatingLabel));
		  return {
			constructor: function(form, options = {}) {
			  var event, i, input, j, label, len, len1, ref, ref1;
			  if (!form) {
				return;
			  }
			  options.focusClass || (options.focusClass = "focus");
			  options.activeClass || (options.activeClass = "active");
			  options.errorClass || (options.errorClass = "error");
			  form.classList.add('has-floated-label');
			  ref = form.querySelectorAll('label');
			  for (i = 0, len = ref.length; i < len; i++) {
				label = ref[i];
				if (!(input = document.querySelector(`#${label.getAttribute('for')}`))) {
				  return;
				}
				ref1 = ['keyup', 'input', 'change'];
				for (j = 0, len1 = ref1.length; j < len1; j++) {
				  event = ref1[j];
				  input.addEventListener(event, function() {
					this.parentNode.classList.remove(options.errorClass);
					return this.parentNode.classList.toggle(options.activeClass, !!this.value);
				  });
				}
				input.addEventListener('focus', function() {
				  return this.parentNode.classList.add(options.focusClass);
				});
				input.addEventListener('blur', function() {
				  return this.parentNode.classList.remove(options.focusClass);
				});
				input.parentNode.classList.toggle(options.activeClass, !!input.value);
			  }
			}
		  };
		})();
	  
		// initialize
		window.floatingLabel = new floatingLabel(document.querySelector('.form'));
	  
	  }).call(this);
	  
	  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBRyxDQUFBLFFBQUEsQ0FBQSxDQUFBO0FBQ0gsUUFBQSxJQUFBLEVBQUE7SUFBRSxJQUFBLEdBQU87SUFDUCxRQUFBLEdBQVc7SUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDLFNBQUEsR0FBWSxRQUFaLEdBQXVCLFVBQXJFO0lBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBZCxDQUFpQyxXQUFqQyxFQUE4QyxpRUFBQSxHQUFvRSxJQUFwRSxHQUEyRSxNQUF6SDtFQUpDLENBQUE7O0VBTUEsQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNILFFBQUE7SUFBRSxNQUFBLEdBQVM7SUFVVCxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFkLENBQWlDLFdBQWpDLEVBQThDLFdBQUEsQ0FBWSxhQUFaLENBQTlDO1dBRUE7TUFBQSxXQUFBLEVBQWEsUUFBQSxDQUFDLElBQUQsRUFBTSxVQUFRLENBQUEsQ0FBZCxDQUFBO0FBRWYsWUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBO1FBQUksS0FBYyxJQUFkO0FBQUEsaUJBQUE7O1FBRUEsT0FBTyxDQUFDLGVBQVIsT0FBTyxDQUFDLGFBQWU7UUFDdkIsT0FBTyxDQUFDLGdCQUFSLE9BQU8sQ0FBQyxjQUFnQjtRQUN4QixPQUFPLENBQUMsZUFBUixPQUFPLENBQUMsYUFBZTtRQUV2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQWYsQ0FBbUIsbUJBQW5CO0FBRUE7UUFBQSxLQUFBLHFDQUFBOztVQUNFLEtBQWMsQ0FBQSxLQUFBLEdBQVEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFLLENBQUMsWUFBTixDQUFtQixLQUFuQixDQUFKLENBQUEsQ0FBdkIsQ0FBUixDQUFkO0FBQUEsbUJBQUE7O0FBRUE7VUFBQSxLQUFBLHdDQUFBOztZQUNFLEtBQUssQ0FBQyxnQkFBTixDQUF1QixLQUF2QixFQUE4QixRQUFBLENBQUEsQ0FBQTtjQUM1QixJQUFDLENBQUEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUF0QixDQUE2QixPQUFPLENBQUMsVUFBckM7cUJBQ0EsSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBdEIsQ0FBNkIsT0FBTyxDQUFDLFdBQXJDLEVBQWtELENBQUMsQ0FBQyxJQUFDLENBQUEsS0FBckQ7WUFGNEIsQ0FBOUI7VUFERjtVQUlBLEtBQUssQ0FBQyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxRQUFBLENBQUEsQ0FBQTttQkFDOUIsSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBdEIsQ0FBMEIsT0FBTyxDQUFDLFVBQWxDO1VBRDhCLENBQWhDO1VBRUEsS0FBSyxDQUFDLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCLFFBQUEsQ0FBQSxDQUFBO21CQUM3QixJQUFDLENBQUEsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUF0QixDQUE2QixPQUFPLENBQUMsVUFBckM7VUFENkIsQ0FBL0I7VUFFQSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUEzQixDQUFrQyxPQUFPLENBQUMsV0FBMUMsRUFBdUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUEvRDtRQVhGO01BVlc7SUFBYjtFQWJDLENBQUEsSUFOSDs7O0VBNENBLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLElBQUksYUFBSixDQUFrQixRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QixDQUFsQjtBQTVDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJkbyAtPlxuICBsb2dvID0gJzxzdmcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48dGl0bGU+Y29kZXBlbi1sb2dvPC90aXRsZT48cGF0aCBkPVwiTTE2IDMyQzcuMTYzIDMyIDAgMjQuODM3IDAgMTZTNy4xNjMgMCAxNiAwczE2IDcuMTYzIDE2IDE2LTcuMTYzIDE2LTE2IDE2ek03LjEzOSAyMS42NTFsMS4zNS0xLjM1YS4zODcuMzg3IDAgMCAwIDAtLjU0bC0zLjQ5LTMuNDlhLjM4Ny4zODcgMCAwIDAtLjU0IDBsLTEuMzUgMS4zNWEuMzkuMzkgMCAwIDAgMCAuNTRsMy40OSAzLjQ5YS4zOC4zOCAwIDAgMCAuNTQgMHptNi45MjIuMTUzbDIuNTQ0LTIuNTQzYS43MjIuNzIyIDAgMCAwIDAtMS4wMThsLTYuNTgyLTYuNThhLjcyMi43MjIgMCAwIDAtMS4wMTggMGwtMi41NDMgMi41NDRhLjcxOS43MTkgMCAwIDAgMCAxLjAxOGw2LjU4IDYuNTc5Yy4yODEuMjguNzM3LjI4IDEuMDE5IDB6bTE0Ljc3OS01Ljg1bC03Ljc4Ni03Ljc5YS41NTQuNTU0IDAgMCAwLS43ODggMGwtNS4yMzUgNS4yM2EuNTU4LjU1OCAwIDAgMCAwIC43ODlsNy43OSA3Ljc4OWMuMjE2LjIxNi41NjguMjE2Ljc4NSAwbDUuMjM2LTUuMjM2YS41NjYuNTY2IDAgMCAwIDAtLjc4NmwtLjAwMi4wMDN6bS0zLjg5IDIuODA2YS44MTMuODEzIDAgMSAxIDAtMS42MjYuODEzLjgxMyAwIDAgMSAwIDEuNjI2elwiIGZpbGw9XCIjRkZGXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiLz48L3N2Zz4nXG4gIGxvZ29fY3NzID0gJy5tTXtkaXNwbGF5OmJsb2NrO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO3Bvc2l0aW9uOmZpeGVkO2JvdHRvbToxZW07cmlnaHQ6MWVtOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstd2Via2l0LXRyYW5zaXRpb246YWxsIDI0MG1zIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIDI0MG1zIGVhc2UtaW4tb3V0O3otaW5kZXg6OTk5OTtvcGFjaXR5OjAuNzV9Lm1NIHN2Z3tkaXNwbGF5OmJsb2NrfS5tTTpob3ZlcntvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xMjUpO3RyYW5zZm9ybTpzY2FsZSgxLjEyNSl9J1xuICBkb2N1bWVudC5oZWFkLmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgJzxzdHlsZT4nICsgbG9nb19jc3MgKyAnPC9zdHlsZT4nXG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MICdiZWZvcmVlbmQnLCAnPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pby9taWNhbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm1NXCI+JyArIGxvZ28gKyAnPC9hPidcbiAgcmV0dXJuXG5kbyAtPlxuICBmb290ZXIgPSAnPGZvb3RlciBpZD1cImZvb3RlclwiIHJvbGU9XCJjb250ZW50aW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDMgY2xhc3M9XCJmb290ZXItdGl0bGVcIj5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2NvbGxlY3Rpb24vWFJveEdSXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2FsaWJyYXRpb24gdGVtcGxhdGU8L2E+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9vdGVyLWVudHJ5XCI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbW9iaWxlbWFya3VwLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPm1vYmlsZU1hcmt1cC5jb208L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPicgIFxuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCAnYmVmb3JlZW5kJywgZm9vdGVyY2xhc3MgZmxvYXRpbmdMYWJlbFxuICBcbiAgY29uc3RydWN0b3I6IChmb3JtLG9wdGlvbnM9e30pIC0+XG4gICAgXG4gICAgcmV0dXJuIHVubGVzcyBmb3JtXG4gICAgXG4gICAgb3B0aW9ucy5mb2N1c0NsYXNzIHx8PSBcImZvY3VzXCJcbiAgICBvcHRpb25zLmFjdGl2ZUNsYXNzIHx8PSBcImFjdGl2ZVwiXG4gICAgb3B0aW9ucy5lcnJvckNsYXNzIHx8PSBcImVycm9yXCJcbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQgJ2hhcy1mbG9hdGVkLWxhYmVsJ1xuICAgIFxuICAgIGZvciBsYWJlbCBpbiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJylcbiAgICAgIHJldHVybiB1bmxlc3MgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiIyN7bGFiZWwuZ2V0QXR0cmlidXRlKCdmb3InKX1cIilcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgZm9yIGV2ZW50IGluIFsna2V5dXAnLCdpbnB1dCcsICdjaGFuZ2UnXVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyIGV2ZW50LCAtPlxuICAgICAgICAgIEBwYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgb3B0aW9ucy5lcnJvckNsYXNzXG4gICAgICAgICAgQHBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSBvcHRpb25zLmFjdGl2ZUNsYXNzLCAhIUB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnZm9jdXMnLCAtPlxuICAgICAgICBAcGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkIG9wdGlvbnMuZm9jdXNDbGFzc1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnYmx1cicsIC0+XG4gICAgICAgIEBwYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgb3B0aW9ucy5mb2N1c0NsYXNzXG4gICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUgb3B0aW9ucy5hY3RpdmVDbGFzcywgISFpbnB1dC52YWx1ZVxuXG4jIGluaXRpYWxpemVcbiAgICBcbndpbmRvdy5mbG9hdGluZ0xhYmVsID0gbmV3IGZsb2F0aW5nTGFiZWwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKSJdfQ==
	  //# sourceURL=coffeescript

	
})

