export const style = {
    sass: {
      loaderOptions: {
        additionalData: `
        @import "src/shared/styles/_variables.scss";
        @import "src/shared/styles/_mixins.scss";
        @import "src/shared/styles/_normalize.scss";
        @import "src/shared/styles/btn.scss";
        `,
      },
    },
  };