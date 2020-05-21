<main>
    <div class="container">
        <div class="cd-collection">
            <?php // Print Data
            foreach ($music_info as $cd) { ?>
                <div class="cd">
                    <img src="<?php echo $cd['poster']; ?>" alt="<?php echo $cd['title']; ?>" class="poster">
                    <h3 class="title"><?php echo $cd['title']; ?></h3>
                    <span class="author"><?php echo $cd['author']; ?></span>
                    <span class="year"><?php echo $cd['year']; ?></span>
                </div>
            <?php } ?>
        </div>
    </div>
</main>
