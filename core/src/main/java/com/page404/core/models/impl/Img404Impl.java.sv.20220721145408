/*
 * ***********************************************************************
 * Page 404 CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Page 404.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Page 404 and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Page 404
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Page 404.
 * ***********************************************************************
 */

package com.page404.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.page404.core.models.Img404;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Img404 .class,
    ComponentExporter.class
}, resourceType = "page404/components/img-404")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class Img404Impl
    implements Img404
{

    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Image image;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("image")
    public Image getImage() {
        return image;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
