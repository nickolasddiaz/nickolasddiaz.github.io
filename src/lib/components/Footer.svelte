<script lang="ts">
  const socialLinks = [
    {
      name: 'GitHub Profile',
      url: 'https://github.com/nickolasddiaz/nickolasddiaz.github.io',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA+CAMAAACsn+1dAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAFHRSTlMA/wMN+fLn1oRkIhmlxjJUt3SWQTEXTF8AAAMZSURBVHicpVdXFtwgDGQB07vvf9fIxkXgRhL97T40qIzEmJB7o5Qyexhj8Pvh5K0xG2IuLkkphJDSu5JjsKMQlIXsvBDT7zQupC85sAEMymaVBP9dbRJezZ8QNBQ53XhvGBIgXt1N9neXIwivXxBYdM+37ybcUxCUaf/tD/YQBLVKjLiDyXzTUmrU0PU1DWV6BGrK6P0Voc+Clffq98ZLi8Dy39y/2NRUkmq5xyZfeLQwye83yXiWgc47fbiao0ryPh0ukorzXmuewoFg3e4hA4yxueeTcNHAWIc9hKmYPYB4FMDZSomYJpg/p7SOUauSpAAO1+ZTvx+WWxmoSUeQe22p1XDdukboultiPgIux+l6HXTgCHi6tPfG8plU3Cr4+0eAn2cdBXp63BktJwBfWmkcaloy3wBnwHDeQgYS/SHDJ0DAnBUzoRn1fKgGimOHZoq4+w4AioZp5ohFKYm3fXdYk7QnBqXkRwLAzIeikRmVpIy9PVSflwqiEIAe8m9ymEhCAN8kqBbOunGCWTBSwsXO6QMATIvR5xcB/Aj/XwDk/7OjAIg7BC+vMRp0ALgGccwft5E3bVR/TyRO0HpYpnsIAL2iE4kIwIehEGw6WydIQFUUeYhKEZFPEot+wT4YCIE5HHQzm0MhMI077whrdIXUXyEwnAC8pfCu4T/gzX1Xgiw2Mm7SIAxT8xbLfFEvp11koIcNYGsOXG4SbUrxSRUznTodslCv5rA0wOYqcTnoUWObVChjJuSLbhBrzWsIQoVFKG5HhHcZt9Tk4q8iCF6FFb3OhnAGEI5TIB8QACs3koPvW3zr5ATPvT0OQjtw+s0DuCdwsGZbklxREBs1CayA1kvcxR8d2edTzoDgBAebVDuZNF+EF5ZprMrk1Ytp5UAcdWygui9CK1bNmjtP89JX+Nq60PECwJsi73xsS99YB9DXCOi0IogyW7bqsj6GFuDif2gtLhdxqHOe3wBqrj1CqDTk02r9gsUAT4vHuvNzrwfARRSPiwsN6zMAaN7HSsNHpxMPALsWWz7aXlYONduX2wMAv1z/B0EGH/4etq+2AAAAAElFTkSuQmCC'
    },
    {
      name: 'GitHub Repository',
      url: 'https://github.com/NickolasDDiaz',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAAPFBMVEUAAAD////7+/v9/f3+/v7Gxsbt7e3+/v79/f3////c3NyHh4dPT09zc3Pj4+O4uLgqKirr6+vb29ulpaU7LxzrAAAAFHRSTlMA//iuMY71328FnyIYFM1+IBosJA4B+3cAAALcSURBVHic1drRsoIgEAZgBUzQrND3f9eDWQqyK79IF4fLBr9ZgYXFqargZnVb16LVBn8Eb0NTv5tohvJ434hFr2/P++/w8vzg4zNfdHBCvCw/7PGi/BThM9+XwePIC0Y/PCm8FN8/aP3f85fSalkX99/wfacWfurK830n5MK/epZvMvm3+OX56PP4T7i/4dex+AXvDXR5PpjFjZday/Yyv1siK2+NtYrwT/HR+vvw72betUE+Hy9u4fOVJSYA5qnMEdJ6PUaZPfZ0Wra+bggd45mcl0EFRp9WaZ7bUGTQi5hXhKfP0EhnQkjw7FZYy8nvJ3Oylo3czar2O94zjpMDfB/86zR/iLuXHq7wx/gcvTIYT1QKSfw79qM1Z/mBqhVpXX/fAeeByFe9PckTJfSRXp/jMXzTT/Eg7uke37pGPL7yKO7rK9+PSiktbxw/oHigB6vfTA1xGM68hfFQD5PLauowHCuN2nu9lqPHK+q40hV5DkB6PXobmyGCd4cCjse6n4+KqqKu6CrQiaERFTynGXp9ZdyDHXl8EA9U1GyAeufVOEbHCeXWjHkSP2P6zW7BU+XZXL+9YH6vi279VkBdyJd0u6P8Xq9v3bIoje3iUf/mMspHuiteO63U2BD1zbZRDBgf6/M3PnoH9nchjKd0poX1A8Tjeoi7UwDgYX2PQ9GjeowjPKhTeJJ3i9suOX/M03iCF930ecr0xIaVxI/T6rF9ITQN3y24esK8aLxu5J0viR/wwY2Svdkc445n3hq58yVxlgd0kcY5Pn0bhnCGb/1HqVkFcZoX/o2SOP9hnObbra4b4iVzAqf5bxIaG6/aUzjJi1Yra41VFyPnohct/dXtNM6nVdwy8BN8Dg7zeTjI5+IQn48DVdoVPMlfwxP8VfyQ5w9ovLGVQgmc5cvgDF8Kn7+CRHw5vKqmffQl8Sj6sviuvi+NB9GXx7f/QvwEd9dpLW/CXREsjv8BHjorE9Wbp1wAAAAASUVORK5CYII='
    },
    {
      name: 'HandShake Profile',
      url: 'https://app.joinhandshake.com/profiles/hezpcr',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA6CAYAAAAKjPErAAAAAXNSR0IArs4c6QAAAwVJREFUaIHtmk1ME0EYht+ZbREKBQ3yUxEKlUNRouFiOGgAPSjxQDQxxpMHL16MIolGw6UkRA16UKMJaIJHTyqQBiX+gZqokVAoyI9R22qpBTGmYKnU6XoyIUYEYWdnWfpc+5PvmXe+b3aziz7XU/T4nHD7m+H1ncUn/zF6+hzoh29HUVmVZrjd6rDKGqe93WE9cXyjwTWwB3XnQWX5Av06cxMj0QcYmu4H6fa0gVq8mAp9RLA3IJVsKmTdw86U/WUvJrEMcbZtT9629VD4YY9Lsu22s1SsB3H7m/GFuGFIiEprkcns6bWy6EKVIIwW0hV4IhVYipghlX3GT5YmRaYnmd2mD0EAMKFKLrckkP5hj0QTqJ+aZcZKbQ26EfxNIirlYpud0dBUf+x6Y12i6IJ4UX+lxkR83gPIzbuluxRnQwqtIG89ckx0ITyhly7XWEUXwRsiy7KutyoAUNEFqMGKkDTw+mNLViaZ67NAcOyvLTLXb+b6/kJZEUlqRvJfyS8VzUjyRHXJpfbXYtB8kkosChdJnv21GDSRJO9F0YQkb+KSSiNisgIaT1KpRVFcUmuTFdBAkmosilBJtVLndqv1J7P7S+0trXqSInpWUcn5BP5HUMnjRrUkRU5d4dNVDYRJqnn1I0RS7cs71Y4QYOFySi+CYknON1hEXZwDKm1XkYKAwMGj5pESP0KUQPRWBeJJLhwl+4tH8kKS1P2tlgi4Smph6AAaS5LXosRfjNALK0OypfVUgegieEOsuSAen85fO3v07KD+B084MoZaR1Ky6EJ4UX2SJJHJsIPGDDmxVONhXSYajl0lNMrWxUZ8o9IYbmjuadRS+Y5G4n7vlWgE2TDnmdi78TdS8Mc13YiG0ERe+bqkjA1rGGUsEyZjHlJSstjzztdSYPwiae0oXbY92nSnyDw60UDuOx9LFksRM5Ic0OmQGTPRQpgMxaioKGOWDEoHXS8jwwP7yJnqzcbODke+6MLn4+69+vxde1cbByeOkL7eoXB2OqU7dpazVfIWUJTgFz4MttFAhkhhAAAAAElFTkSuQmCC'
    },
    {
      name: 'LinkedIn Profile',
      url: 'https://linkedin.com/in/nickolas-diaz-937222242',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABcCAMAAAA780lUAAAAPFBMVEX///8AAAD///////////////////////////////////////////////////////////////////////+em3UEAAAAFHRSTlP/AOjwA8Ydcw8qvp4LIYOu1DuOWObW8y4AAAIUSURBVHic7ZrbkoMgDIZBTlLO8v7vutrtWJLaXkjY6ez4X4J8w0TyB0TGuSxpYtSaUpGcM+6jIGdvEnHmTJoh7E3GMztm5puEZcswOFvZeSBdMfrl8tTExoX9on8RXeTknCJZSq90VYsNtlRHwH+hu+L5Jqlrf55huguSP+T78Yieyw7nfI7EdON5I5tI6bm0cO57/RPSbxbQZW9oID1BOjedqfaXdBR34siIKlu6dqR05nQ79e50QnTRLHjZvdxfnCDveGl743LgYlO829hqYt0zP3JgcVuiMZFka3lYm4QgKlj/rK5+C31Sa31PHwo8zqasGu3D1EFrNiXoeZUOb0s8oqvin5r3c4NuWv09yXKd5e5JUvpweIDB9NaCn6eSufW2jR5By132wJRO0ZGVPjTfSOiien4krwjoi3kNy680frcn6BWVx0b4+HiCLo+C/qs5d9M/CBdiYjo6/NLSuVYkdLmm/7rRxx2zo6CXmFTOOS0FvmJfCeg1PUaJBPGy9NPLM+cF2hzC13qK7poxkwGTtyBdz9ALyBkHOgPoO0NfwJAb2NkGsCTP0OE2aqoj6cIAOjD5My6GtoBRUtJxDaKl64t+0S/6Rb/oF/2i/3960U+F/RRkm1Zd0LF0CW87EX1KrtH+ZNvo8Det/L7zi7/PXPSvpY+9Xx17N9x9qfRBkYWhd/Ij/yeQbLXCQf9CGM9/AKXlI1Lyt/L9AAAAAElFTkSuQmCC'
    },
    {
      name: 'TryHackMe Profile',
      url: 'https://tryhackme.com/p/NickolasDaniel',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAPFBMVEUAAAD////////+/v7////////+/v7+/v7////+/v7////////9/f3+/v7+/v3////x8fHY2NicnJy/v7+YVeHcAAAAFHRSTlMABP2mIPSTWBB/utAzbEfiEwcDBJCqjXEAAAMgSURBVHiclVaLlqswCCwSCeRB7O7//+udxL622url9FitGQnMMPZy2QSFUlObpjmLB6Xtgv2gMFBrAFvOQYk8zQC03ANnU67hDFLrusfopRQ3xlXjcogkrTNg5st927FDUznMZ22a+bUqVNyR4SBhHIvo7ceMH/UrMKS9hxNyzvVbmWTz1HbKUZ6n/G2zPaFd925kpNy7cUvoeWq7DyaZJv6YclAhu6VQgQ4K9di5Fw07Fd8VGGEvgrD43vJguc1DaulO/msseObco6X4Sszv0Oct2rbzyo+70Mez2N6VLkkz67LmTUoUP7UkZkP/D6YHLltA5ZgNTnGT0ROmqzfmWuRFgAH8Jr+v1rAljIrfK9MKTmVcUYQu/PSc97lr3s/QsdsjzkVAp6znKe1/EnbNz+uwePsip73omQbwk9A+pow8Gn8G+FejP+slgFvKXzAKgkMJT7r0ouOy5G9mRMUsBGZZnQ4WxCUYC9rZ6bCPdASG7CVbXhmDm82xNkmso72f+dAoKWZZeNWZumU4ZonZP1nUA1lTbKayriB4Xkw5eAeSd7v+VCaAnlmZb9V4z+g1l8vN9luy+B5l6ULhElvK9yn1FAteLEN0XfJ9kOdNxHUyyO0xayEWdPruA4TGtWkb9cHKm9U8LklhVsJvIWUsotvKfviln7cm4H54j+54GjHEGrFV9UgaYXSfCPgTizQOKi1pkJap5LZjZntRcuZQOGf11Bro9MSnpp4WwbQSZyXFAYzKwSvvudc+5sBcFhyYA5/L+BdINUs+aVAaK/RToRSqQn2ijv9KjCAdpODQzzDWy0kchv0KQgN8YFn3CD+44iEHQMvQePKQ2EsaCqSYoHO277ifZHjXtMhiUvNYrFKNMdsHO83VqmJ2rUqQugK9cpAD4AVSd02xJqnLCsSAJlM7ArpUpVoUXkfRL71JhWF0tR4ABweI9euCLToaE4SPgG4enxYIDZhBPTEJHwClCjb7AFqNUljgfEdArvCwxxsCFmOwSomZj4BuJZTVN241FqpRweQB8O5LMLviYXWg8Tn7ZlyMjf3k4jdgrH+A/wAPbB/ctsO3zQAAAABJRU5ErkJggg=='
    },
    {
      name: 'LeetCode Study Plan',
      url: 'https://leetcode.com/studyplan/leetcode-75/',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABdCAMAAADwr5rxAAAAPFBMVEUAAAD///////7////////8/Pz+/f38/Pv+/f3+/Pr+/v7d3d3y7ej////CwsL/KwCAgID/zaOAgAD/gIDQXlnTAAAAFHRSTlMA/+0I+JhZRHMpsggN0wgCAgMCAgGtvq4AAAKPSURBVHic7VnbsqMgEDwy3BWz2f3/f92YuDqDAQSHh62yH61Up+25gj8/N24sgNEYGDuRz0oMg1SuD7mXwwLfg3xSw4oO4mcl/7ErfnI/bGC3ZtqVD4NlJh8xeQBe8j2gLwjNS06UC80rfSbkhpc8soWXvKstI1FuWLlpnve1pWdAX2Wk4Q8fOVH+4bds/REO5G/9XORH7gVqYiCfvylfIP314M4J5W93rtJPKeVvXFR/zJbInCve0zyXIngfBPm/C+qJcuk/Oe60x/+oWulTXRG0uJ45kO7nBtG3mZPr50+ivmGtmfMD2mH11U2B9nN7eHnifagkL485wN7XZT2c2Vt2ellJTpTPiV9t5tRtfCdn6HNVX9XMQOcDimCCEMJXjSkXTtiyYjLG1Z2fbDmg7QBx0pYmWKScnRw216X9xU2OaiTufeBMCa70sns6RpuoW7KvhEK7hM32qDXhPM0gP6qeW4ehMlIrUwyZzeFxG5r0Z3BOekF8X/bdAdr4wOcoEbIFCCnfbXZt2pA/8+w5I+jAORfWUnnv+R7NBNBl670rlPc+7EWH6xcUPp/v7U3Q6EX52XFmd7hYM3vuSX71pHDy6z84q/RUN2NIO8yd7KblXrL2bAkOHwrSLRvWe8na1MUraFL9Xr2V0SELk1RfNxa0DsrfdfQ4cb5v0BOO/aOSHQrmkEW2Pm8jcw7K8a7ZUnPk6EVHDikJ2XSlGpmD6Ok51radtwGHVoZt6riAn7evg0S99Nq9YBR5eGGRJaFd4heCIA9abVlh8nccF/d7GtqY/PJ+H5tDlDPs9yahXrB8OgDzdQ8LXCeTyR7ks37Lcp5UUPC8l9jgtPrkughKF08wbXg8alv5jRs3/gv8BRqQFIdcf5NIAAAAAElFTkSuQmCC'
    }
  ];
</script>

<div class="bottompage">
  <footer>
    <div class="rounded-social-buttons">
      {#each socialLinks as link}
        <a class="social-button" href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} class="social-icon" alt={link.name}>
          <span class="tooltip">{link.name}</span>
        </a>
      {/each}
    </div>
  </footer>
</div>

<style>
  .bottompage {
    background-color: var(--green);
    left: 0;
    width: 100%;
    height: 10vh;
    bottom: 0;
    position: fixed;
  }

  .rounded-social-buttons {
    text-align: center;
    padding-top: 1vh;
  }

  .social-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
    width: 3.125rem;
    height: 3.125rem;
    text-decoration: none;
    text-align: center;
    border-radius: 1.6875rem;
    transition: all 0.5s ease;
    margin-right: 0.75rem;
    margin-bottom: 0.25rem;
    background: transparent;
  }

  .social-icon {
    width: 100%;
    height: 100%;
  }

  .social-button:hover .social-icon {
    filter: invert(1) sepia(1) hue-rotate(150deg);
  }

  .tooltip {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
    z-index: 1;
  }

  .social-button:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
</style>